#!/usr/bin/env bash
# 최초 1회: 비공개 S3 버킷 + CloudFront(OAC) 생성. 결과 ID는 deploy/.cloudfront.env에 저장.
set -euo pipefail
cd "$(dirname "$0")"

REGION=ap-northeast-2
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
BUCKET="haeun-portfolio-${ACCOUNT}"
NAME=haeun-portfolio

if [ -f .cloudfront.env ]; then echo "이미 생성됨: $(cat .cloudfront.env)"; exit 0; fi

# 1) 비공개 버킷
aws s3api create-bucket --bucket "$BUCKET" --region $REGION \
  --create-bucket-configuration LocationConstraint=$REGION >/dev/null
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

# 2) OAC
OAC_ID=$(aws cloudfront create-origin-access-control --origin-access-control-config \
  "Name=$NAME,OriginAccessControlOriginType=s3,SigningBehavior=always,SigningProtocol=sigv4" \
  --query 'OriginAccessControl.Id' --output text)

# 3) 경로 -> index.html 재작성 함수 (/projects/ -> /projects/index.html)
cat > /tmp/rewrite.js <<'EOF'
function handler(event) {
  var r = event.request, u = r.uri;
  if (u.endsWith('/')) r.uri = u + 'index.html';
  else if (!u.split('/').pop().includes('.')) r.uri = u + '/index.html';
  return r;
}
EOF
FN_ETAG_ARN=$(aws cloudfront create-function --name ${NAME}-rewrite \
  --function-config Comment=rewrite,Runtime=cloudfront-js-2.0 \
  --function-code fileb:///tmp/rewrite.js --query '[ETag,FunctionSummary.FunctionMetadata.FunctionARN]' --output text)
FN_ETAG=$(echo "$FN_ETAG_ARN" | cut -f1); FN_ARN=$(echo "$FN_ETAG_ARN" | cut -f2)
aws cloudfront publish-function --name ${NAME}-rewrite --if-match "$FN_ETAG" >/dev/null

# 4) 배포 (캐시 정책: Managed-CachingOptimized)
cat > /tmp/dist.json <<EOF
{
  "CallerReference": "$NAME-$(date +%s)",
  "Comment": "$NAME",
  "Enabled": true,
  "DefaultRootObject": "index.html",
  "PriceClass": "PriceClass_200",
  "HttpVersion": "http2and3",
  "Origins": {"Quantity": 1, "Items": [{
    "Id": "s3", "DomainName": "${BUCKET}.s3.${REGION}.amazonaws.com",
    "OriginAccessControlId": "$OAC_ID",
    "S3OriginConfig": {"OriginAccessIdentity": ""}}]},
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3", "ViewerProtocolPolicy": "redirect-to-https",
    "Compress": true,
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "AllowedMethods": {"Quantity": 2, "Items": ["GET","HEAD"]},
    "FunctionAssociations": {"Quantity": 1, "Items": [{"EventType": "viewer-request", "FunctionARN": "$FN_ARN"}]}
  },
  "CustomErrorResponses": {"Quantity": 2, "Items": [
    {"ErrorCode": 403, "ResponsePagePath": "/404/index.html", "ResponseCode": "404", "ErrorCachingMinTTL": 60},
    {"ErrorCode": 404, "ResponsePagePath": "/404/index.html", "ResponseCode": "404", "ErrorCachingMinTTL": 60}]}
}
EOF
read -r DIST_ID DIST_DOMAIN < <(aws cloudfront create-distribution --distribution-config file:///tmp/dist.json \
  --query 'Distribution.[Id,DomainName]' --output text)
DIST_ARN="arn:aws:cloudfront::${ACCOUNT}:distribution/${DIST_ID}"

# 5) 버킷 정책: 이 배포만 읽기 허용
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
  \"Version\":\"2012-10-17\",\"Statement\":[{
    \"Effect\":\"Allow\",\"Principal\":{\"Service\":\"cloudfront.amazonaws.com\"},
    \"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::${BUCKET}/*\",
    \"Condition\":{\"StringEquals\":{\"AWS:SourceArn\":\"${DIST_ARN}\"}}}]}"

printf 'BUCKET=%s\nDIST_ID=%s\nDIST_DOMAIN=%s\n' "$BUCKET" "$DIST_ID" "$DIST_DOMAIN" > .cloudfront.env
echo "생성 완료: https://${DIST_DOMAIN}"
