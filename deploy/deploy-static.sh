#!/usr/bin/env bash
# 빌드 -> S3 업로드 -> CloudFront 캐시 무효화
set -euo pipefail
cd "$(dirname "$0")/.."
source deploy/.cloudfront.env

npm run build
# 해시된 정적 파일은 오래 캐시, HTML은 항상 재검증
aws s3 sync out "s3://$BUCKET" --delete --exclude "*.html" --cache-control "public,max-age=31536000,immutable"
aws s3 sync out "s3://$BUCKET" --delete --exclude "*" --include "*.html" --cache-control "public,max-age=0,must-revalidate"
aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/*" >/dev/null
echo "배포 완료: https://$DIST_DOMAIN"
