# 이하은 포트폴리오

개발자 이하은의 포트폴리오 사이트입니다.

**https://d39sqbzqfq296f.cloudfront.net**

프로젝트(U-TreeMap, 앤서러블, mealpick, 여보세요, BookSentimentLeague), 수상, 활동, 이력, 블로그 글을 한곳에 정리했습니다.

## 기술 스택

- Next.js 16 (정적 export) · React 19 · TypeScript
- Tailwind CSS 4 · Noto Serif KR
- MDX 블로그 (`content/posts`) + Velog 글 링크
- 배포: AWS S3 + CloudFront (서버 없음)

## 구조

- `lib/site.ts` — 이름, 소개, 프로젝트, 수상, 활동 등 사이트 데이터를 한곳에서 관리합니다.
- `app/` — 페이지 (홈, `/projects`, `/resume`, `/blog`)
- `components/` — 헤더(랜덤 배너), 소개(Default/Long 토글) 등
- `public/projects/` — 프로젝트 화면 이미지

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 파일을 out/ 에 생성
```

## 배포

AWS CLI에 로그인한 뒤 실행합니다.

```bash
./deploy/setup-cloudfront.sh   # 최초 1회: 비공개 S3 버킷 + CloudFront(OAC) 생성
./deploy/deploy-static.sh      # 빌드 → S3 업로드 → CloudFront 캐시 무효화
```

버킷은 비공개이고 CloudFront 배포만 읽을 수 있습니다. 배포 식별자는 `deploy/.cloudfront.env`에 저장되며 저장소에는 올리지 않습니다.
