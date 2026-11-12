type Shot = { src: string; alt: string; caption: string; w: number; h: number; wide?: boolean; ratio?: string; plain?: boolean };

export const site = {
  name: "이하은",
  handle: "이하은",
  role: "서비스 개발자",
  // 초안입니다. 직접 고민한 문구로 교체하세요.
  bio: {
    short: [
      "함께 만드는 것을 좋아합니다.",
      "U-TreeMap, mealpick, 앤서러블, 여보세요 등 여러 팀 프로젝트를 기획하고 진행했으며, 백엔드와 프론트엔드를 오가며 개발에 힘썼습니다.",
    ].join("\n"),
  },

  // About 페이지: 소제목별 문단 (홈의 Bio는 위의 short만 사용)
  about: [
    {
      title: "",
      paragraphs: [
        "함께 만드는 것을 좋아합니다.",
        "[U-TreeMap](/projects#u-treemap), [mealpick](/projects#mealpick), [앤서러블](/projects#answerable), [여보세요](/projects#yeoboseyo) 등 여러 팀 프로젝트를 기획하고 진행했으며, 백엔드와 프론트엔드를 오가며 개발에 힘썼습니다.",
      ],
    },
    {
      title: "어린 시절",
      paragraphs: [
        "어린 시절 어머니께서는 의상실을 운영하며 여러 무대의상을 만드셨습니다. 아버지께서는 주말이면 두 아들을 데리고 철물점에 가서 각목과 여러 재료를 사 이층침대, 썰매, 활, 구루마처럼 생활에 필요한 물건을 만들어 주셨습니다. 할머니 댁에 놀러 가면 용접과 배관으로 농가에 필요한 물건을 직접 만들고 고치시는 모습도 보여 주셨습니다. 저는 이런 부모님 아래에서 손으로 직접 만들고 쓰는 즐거움을 배우며 자랐습니다.",
      ],
    },
    {
      title: "개발을 만나다",
      paragraphs: [
        "초등학교 때는 미술과 공작 활동을 즐겼고, 중학교 1학년 때 아두이노, 마이크로비트, 엔트리, 스크래치로 하드웨어와 함께 코딩에 입문했습니다. 중학교 2학년에는 교내 C언어 동아리를 만들어, 방과후 매주 수요일마다 친구들을 이끌고 천인국 교수의 『C언어 Express』로 스터디를 진행했습니다. 3학년 때는 경상북도 메이커스 해커톤에 참여해 여러 센서를 활용한 뮤직박스를 만들었습니다.",
        "고등학교에서는 방송부에서 영상 편집을 했고, \"작당\" 동아리에서 아두이노와 햄스터봇으로 미로탈출 게임을 설계해 구미 메이커스 페스티벌에서 학생 참여형 부스를 운영했습니다. 아두이노로 물풍선 대포를 만들었고, \"생활코딩\"의 웹 기초 강의를 혼자 들으며 주기율표 웹사이트를 만들어 과학동아 주기율표 경진대회에 출품하기도 했습니다.",
        "영상 편집, 하드웨어 제작, 웹 개발 중에서는 개발이 가장 마음에 들었습니다. 피드백 주기가 짧고, 제 생각을 표현하는 데 비용이 가장 적게 드는 활동이어서, 넘쳐 나는 생각을 표현하기에 프로그래밍이 가장 알맞은 도구라고 판단했습니다. 이후에도 드림코딩 같은 무료 유튜브 강의로 JavaScript를 익혔고, 수능이 끝난 뒤에는 \"코딩애플\"의 React 강의를 구매해 독서실에서 매일 공부했습니다.",
      ],
    },
    {
      title: "대학에서",
      paragraphs: [
        "울산대학교에 입학하자마자 개발 동아리 \"가온누리\"에 가입해 백준과 solved.ac으로 기초 프로그래밍과 알고리즘 역량을 착실히 쌓았습니다. 그해 2학기에는 UMC 5기에 프론트엔드로 참가해 [BookSentimentLeague](/projects#bsl) 프로젝트의 프론트엔드를 맡았고, 특히 로그인 기능과 전역 상태관리를 담당했습니다.",
        "군대에 입대하기 전에는 24학번 후배들을 위한 [백준 가이드 글](https://velog.io/@dlgkdms4660/%EC%8B%A0%EC%9E%85%EC%83%9D%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%B0%B1%EC%A4%80%EA%B3%B5%EB%B6%80%EB%B2%95)을 썼고, 이 글은 Velog에서 좋아요 314개와 방문 29,000회를 얻었습니다.",
        "전역 직후에는 가온누리 선배들과 [U-TreeMap](/projects#u-treemap) 프로젝트를 진행했습니다. 울산 생명의 숲 시민단체의 수목조사 봉사활동을 전산화하는 작업으로, 도시 수목의 수고, 흉고직경, 수관폭, 지하고 등을 측정하게 했습니다. 정확한 나무 개체 식별을 위해 삼각측량과 GPS 초기화 후 측정 같은 방법으로 GPS 정확도를 높였습니다.",
      ],
    },
    {
      title: "지금",
      paragraphs: [
        "2학년으로 복학한 2026년부터는 가온누리 회장을 맡고 있습니다. 2025년 겨울학기부터 2026년 2학기까지 부원들을 대상으로 프론트엔드·웹 입문 스터디도 진행하고 있습니다.",
        "2026년 1학기에는 HCI 수업에서 배운 내용을 바탕으로 노인을 위한 전화형 고혈압 관리 서비스 \"[여보세요](/projects#yeoboseyo)\"를 만들었습니다. 여름방학에는 프론트엔드·백엔드 스터디를 수강한 부원 일부와 외부 디자이너를 영입해 식비 기반 자취생 식단 앱 \"[mealpick](/projects#mealpick)\"을 이끌었습니다. 2학기에는 SumTech 해커톤에 울산대 대표로 참여해, AI가 써 준 자소서와 취업 준비생 사이의 생각의 간극을 좁혀 주는 자소서·경험 관리 서비스 \"[앤서러블](/projects#answerable)\"의 프로토타입을 만들고 우수상을 받았습니다. 어렵고 방대한 문제를 하루 종일 집요하게 파고들어 좋은 문제를 찾아내고 해결책을 꺼낸, 매우 뿌듯한 경험이었습니다.",
      ],
    },
    {
      title: "돌아보며, 그리고 앞으로",
      paragraphs: [
        "이 경험들에서 느낀 아쉬움은 제가 만든 프로젝트들이 지속되지 못했다는 점입니다. 3개월 이상 유지될 만큼의 가치를 만들지 못했고, 배포해 두면 매달 서버비만 나가서 유지할 수 없었습니다. 가장 가치 있었던 [U-TreeMap](/projects#u-treemap)도 생명의 숲 담당자분이 안식년에 들어가면서, 열심히 만든 프로젝트의 가치가 사라지는 아쉬움이 있었습니다.",
        "그래서 더 가치 있고 지속 가능한 프로젝트를 만들고 싶습니다. 제가 해결하는 문제가 가치를 만들고, 그 가치가 이어지기를 원합니다.",
        "앞으로의 계획도 있습니다. 요즘 동아리 부원들은 바이브코딩을 잘 활용해 학교생활과 동아리 활동의 불편함을 해결하는 앱을 잘 만들어 주고 있습니다. 저는 이 프로젝트들이 학교 안팎의 사람들에게 더 잘 알려질 수 있도록, 프로젝트를 한곳에서 통합 배포·관리하는 프로젝트를 해 볼 생각입니다. 또 인턴십에서 실무를 경험하며 배우고, 2027년에는 지속할 수 있는 가치가 있는 솔루션을 찾아 창업하거나 소프트웨어 마에스트로 등에 지원할 계획입니다.",
      ],
    },
  ],

  links: [
    { label: "GitHub", href: "https://github.com/ozvshhh" },
    { label: "Velog", href: "https://velog.io/@dlgkdms4660/posts" },
    { label: "Email", href: "mailto:dlgkdms4660@gmail.com" },
  ],

  // 프로젝트 설명(desc)은 아직 비워 둡니다. 채우면 자동으로 표시됩니다.
  projects: [
    {
      title: "U-TreeMap",
      slug: "u-treemap",
      summary: "시민이 수목을 직접 측정·기록하고 탄소저장량을 보여 주는 지도 플랫폼",
      period: "2025.11 ~ 2026.10",
      role: "프론트엔드",
      team: "팀 GreenDay · 5명",
      stack: ["TypeScript", "Node.js", "AWS", "Docker", "React"],
      href: "https://map.k-treemap.site/map",
      repos: [{ label: "GitHub (Frontend)", href: "https://github.com/U-TreeMap/U-TreeMap-FE" }],
      images: [
        { src: "/projects/utreemap/app.webp", alt: "U-TreeMap 앱 실행 화면", caption: "MVP 실행 화면 (iOS 시뮬레이터)", w: 956, h: 463, wide: true, plain: true },
        { src: "/projects/utreemap/figma.webp", alt: "U-TreeMap Figma 디자인 전체 화면 구성", caption: "Figma 디자인 · 화면 전체 구성", w: 1320, h: 1062, wide: true, ratio: "16/9" },
        { src: "/projects/utreemap/requirements.webp", alt: "U-TreeMap 요구사항 정의서", caption: "요구사항 정의서", w: 1550, h: 1045 },
        { src: "/projects/utreemap/api-spec.webp", alt: "U-TreeMap API 명세서", caption: "API 명세서", w: 1600, h: 993 },
        { src: "/projects/utreemap/tasks.webp", alt: "U-TreeMap 태스크 트래커", caption: "태스크 트래커", w: 1225, h: 1055 },
        { src: "/projects/utreemap/api-notes.webp", alt: "프론트엔드 API 요구사항 정리", caption: "프론트 API 요구사항 정리", w: 850, h: 1032 },
      ] as Shot[],
      desc: "시민이 도시 수목의 크기를 직접 측정해 위치와 함께 지도에 기록하고, 탄소저장량 같은 생태서비스를 계산해 보여 주는 데이터 플랫폼입니다. 한이음 드림업으로 환경 단체 **울산 생명의 숲**과 연계해 울산대학교 일대 수목 조사를 진행했습니다.",
      points: [
        "Mapbox 기반 위치 지도와 수목 마킹 화면 담당",
        "확대 수준별 행정구역 집계와 개별 마커 전환, 화면 영역 기반 로딩, 폴리곤 정밀도 조절로 GeoJSON 최적화",
        "휴대폰 흔들기와 삼각측량으로 GPS 위치 정확도 향상",
      ],
    },
    {
      title: "앤서러블",
      slug: "answerable",
      summary: "경험 카드로 자소서의 근거를 확인하는 AI 자소서 서비스",
      period: "2026.10",
      role: "프론트엔드 기획, 구현",
      team: "팀 T1 · 5명 · SumTech 해커톤",
      stack: ["React", "TypeScript", "AWS"],
      href: "https://www.answerable.click/",
      repos: [{ label: "GitHub", href: "https://github.com/ozvshhh/T-1Project" }],
      points: [] as string[],
      images: [
        { src: "/projects/answerable/highlight.webp", alt: "앤서러블 자소서 화면 (근거 경험 카드와 하이라이트)", caption: "자소서 본문 · 경험 카드로 뒷받침되는 문장을 하이라이트", w: 1800, h: 1239, wide: true, ratio: "1800 / 1239", plain: true },
        { src: "/projects/answerable/resume.webp", alt: "앤서러블 이력서 입력 화면", caption: "1 경험 꺼내기 · 이력서를 활동별로 나누기", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/answerable/experience.webp", alt: "앤서러블 경험 꺼내기 화면 (AI 질문, 항목 상태)", caption: "1 경험 꺼내기 · AI 질문과 항목 상태", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/answerable/draft.webp", alt: "앤서러블 자소서 쓰기 화면 (추천 경험 카드)", caption: "2 자소서 쓰기 · 추천 경험 카드로 초안 작성", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/answerable/check.webp", alt: "앤서러블 제출 전 점검 화면", caption: "3 제출 전 점검 · 문장마다 근거를 묻는 질문", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
      ] as Shot[],
      desc: "AI가 쓴 자소서와 실제 경험 사이의 간극을 줄이는 AI 자기소개서 서비스입니다. AI의 질문으로 경험을 '경험카드'로 정리하고, 기업 조건에 맞는 카드를 추천받아 자소서를 작성합니다. 프론트엔드 기획과 구현을 맡았고 해커톤에서 우수상을 받았습니다.",
    },
    {
      title: "FTA 원산지 서류 점검",
      slug: "fta-origin-checker",
      summary: "수출 서류를 대조해 FTA 원산지 증명 적용 여부를 점검해 주는 서비스",
      period: "2026.11",
      role: "웹 전반 개발",
      team: "업스테이지 해커톤 · 5명",
      stack: ["Spring Boot", "React", "TypeScript", "MySQL", "Docker", "AWS"],
      href: "https://ip-3-36-19-235.sslip.io/",
      repos: [{ label: "GitHub", href: "https://github.com/ozvshhh/FTA-origin-checker" }],
      points: [
        "AI 코딩 도구를 활용해 Spring Boot 백엔드와 React 프론트엔드, Lightsail 배포까지 웹 전반을 개발 (팀의 AI 에이전트, 디자인 테마, 데모 영상·발표는 팀원이 담당)",
        "해커톤이지만 사용성에 신경 써서, 체험용 서류 폴더에서 골라 끌어 놓는 파일 탐색기와 처음 쓰는 사람을 위한 안내창, 단축키(↑↓로 이전·다음 심사)를 구현",
        "원본 PDF 위에 불일치·신뢰도 낮음·중간 값을 형광펜으로 칠하고, 마우스를 올리면 이유를 보여 주는 PDF 형광펜",
        "여러 PDF를 한 번에 접수해 AI 분석(Upstage)을 비동기로 처리하고, 진행 단계와 판정 결과를 보여 주는 흐름",
      ],
      images: [
        { src: "/projects/fta/result.webp", alt: "FTA 원산지 서류 점검 판정 결과 화면", caption: "판정 결과 · \"보완 요청\"과 먼저 할 일", w: 1800, h: 1239, wide: true, ratio: "1800 / 1239", plain: true },
        { src: "/projects/fta/explorer.webp", alt: "FTA 원산지 서류 점검 파일 탐색기", caption: "파일 탐색기 · 체험용 서류 폴더에서 골라 끌어 놓기", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/fta/checklist.webp", alt: "FTA 원산지 서류 점검 심사 생성 화면", caption: "심사 생성 · 서류 6종 체크리스트", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/fta/highlight.webp", alt: "FTA 원산지 서류 점검 PDF 형광펜과 안내", caption: "원본 PDF 형광펜 · 마우스를 올리면 이유 표시", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
        { src: "/projects/fta/guide.webp", alt: "FTA 원산지 서류 점검 안내창", caption: "처음 쓰는 사람을 위한 안내창", w: 1800, h: 1239, ratio: "1800 / 1239", plain: true },
      ] as Shot[],
      desc: "수출기업 FTA 담당자를 위한 서비스입니다. 인보이스, 원산지증명서, B/L 등 서류 6종의 PDF를 올리면 AI가 서류를 나누고 값을 읽어 서로 대조해, 특혜 적용 가능 여부와 고칠 곳, 바이어에게 보낼 메일 초안까지 알려 줍니다. 가입 없이 체험해 볼 수 있습니다.",
    },
    {
      title: "mealpick",
      slug: "mealpick",
      summary: "예산을 기준으로 식단을 짜 주는 자취생 식단 앱",
      period: "2026.06 ~ 2026.08",
      role: "백엔드 팀장",
      team: "동아리 공식 프로젝트 · 8명",
      stack: ["Spring", "AWS", "Docker", "MySQL"],
      href: "https://www.mealpick.store/",
      repos: [{ label: "GitHub (Frontend)", href: "https://github.com/GaonSplint-1th/gaon_sprint_f" }],
      images: [
        { src: "/projects/mealpick/app.webp", alt: "mealpick 앱 화면 (오늘의 식단, 식단 추천, 장보기, 보유 식재료 등록)", caption: "앱 화면 · 오늘의 식단 / 식단 추천 / 장보기 / 보유 식재료", w: 1472, h: 750, wide: true, plain: true },
      ] as Shot[],
      desc: "자취생을 위한 식비 기반 식단 생성 앱입니다. 영양을 기준으로 하는 기존 식단 앱과 달리 비용에 초점을 두어, 예산이 빠듯한 자취생도 더 가성비 좋게 먹을 수 있도록 설계했습니다.",
      points: [
        "백엔드 팀장으로 프론트엔드와 연결되는 API와 DB 구조 개발",
        "팀원이 Python으로 만든 식재료 시세·레시피 크롤러를 Docker 컨테이너로 분리해 Spring 서버와 연동하는 구조 설계 (시세 출처: 한국소비자원 참가격, 한국농수산식품유통공사 공공 API)",
        "'케첩 1숟갈'처럼 제각각인 재료 단위를 정리하고, 재료별 특징에 맞춰 분류가 잘 되도록 데이터를 정제",
      ],
    },
    {
      title: "여보세요",
      slug: "yeoboseyo",
      summary: "고령 사용자를 위한 전화형 AI 음성 대화 앱",
      period: "2026.03 ~ 2026.08",
      role: "안드로이드, 서버",
      team: "팀 버터렉션 · 3명",
      stack: ["PostgreSQL", "AWS", "Docker"],
      href: "",
      repos: [
        { label: "GitHub", href: "https://github.com/ozvshhh/YeoboSay" },
        { label: "Android", href: "https://github.com/ozvshhh/yeobosay_android" },
        { label: "Server", href: "https://github.com/ozvshhh/yeobosay_backend" },
      ],
      points: [
        "사용자의 다양한 언어적 표현으로 이루어진 음성 정보에서 필요한 내용을 추출해, DB에 저장할 수 있는 정형 데이터로 변환하는 부분에 집중",
      ],
      images: [
        { src: "/projects/yeoboseyo/app.webp", alt: "여보세요 앱 화면 (AI 안부 전화, 통화 요약)", caption: "앱 화면 · AI 안부 전화와 통화 요약", w: 992, h: 838, wide: true, plain: true },
      ] as Shot[],
      desc: "HCI 수업에서 배운 내용을 활용해 기획한, 고령 사용자를 위한 전화형 AI 음성 대화 앱입니다. 가장 친근한 형태인 전화 UI로 어르신들이 가장 많이 겪는 고혈압 관리 문제를 풀고자 했고, 실시간 음성 인식, LLM 대화, 음성 합성으로 전화 통화처럼 자연스럽게 대화하며 정서적 동반자 역할을 하는 것을 목표로 합니다.",
    },
    {
      title: "BookSentimentLeague",
      slug: "bsl",
      summary: "감성 기반 독후감 공유 플랫폼",
      period: "2023.08 ~ 2024.03",
      role: "프론트엔드",
      team: "UMC 5기 · 기획, 디자인, 개발 팀",
      stack: ["React"],
      href: "",
      repos: [{ label: "GitHub", href: "https://github.com/ozvshhh/BSL_fe" }],
      points: [
        "프로젝트 초기에 디렉토리 구조, 커밋 규칙, 기술 스택, 공통 라이브러리 등 협업 환경을 팀과 함께 세팅",
      ],
      images: [
        { src: "/projects/bsl/wireframe.webp", alt: "BookSentimentLeague Figma 와이어프레임", caption: "Figma 와이어프레임 · 메인 화면", w: 1051, h: 355, wide: true, plain: true },
      ] as Shot[],
      desc: "CRUD 기반의 감성 독후감 공유 플랫폼입니다. UMC 5기에 프론트엔드(React) 파트로 참여해 PM, 디자이너, 백엔드, 프론트엔드로 팀을 이루어 기획, 개발, 테스트, 배포, 운영까지 실무에 가까운 팀 프로젝트를 경험했습니다.",
    },
  ],

  awards: [
    { title: "우수상", event: "SumTech 해커톤", org: "SW사업단, 코드트리", date: "2026.10", note: "팀 · 프론트엔드, 발표", href: "https://velog.io/@dlgkdms4660/2026-%EC%84%AC%ED%85%8C%ED%81%AC-%ED%95%B4%EC%BB%A4%ED%86%A4-with-%EC%BD%94%EB%93%9C%ED%8A%B8%EB%A6%AC-ru1ipduf" },
    { title: "최우수상", event: "제1회 AI를 활용한 사회문제해결 아이디어 공모전", org: "SW사업단", date: "2026.06", note: "팀 · 발표, 개발", href: "https://sw.ulsan.ac.kr/site/swulsan/notices/4621" },
    { title: "최우수상", event: "26년 1학기 프로그래밍 경진대회(2학년)", org: "SW사업단", date: "2026.05", note: "개인", href: "https://sw.ulsan.ac.kr/site/swulsan/notices/4598" },
    { title: "1등", event: "2023-2학기 IT융합학부 프로그래밍 경진대회 (1학년부)", org: "IT융합학부 (대학혁신지원사업)", date: "2023.12", note: "개인", href: "https://cicweb.ulsan.ac.kr/cicweb/1024?action=view&no=245008" },
    { title: "2등", event: "2023-1학기 IT융합학부 프로그래밍 경진대회 (1학년부)", org: "IT융합학부 (대학혁신지원사업)", date: "2023.06", note: "개인", href: "https://cicweb.ulsan.ac.kr/cicweb/1024?action=view&no=237525" },
    { title: "대상", event: "Flipped learning & IF-PBL 우수사례 경진대회", org: "교수학습개발센터", date: "2026.06", note: "팀", href: "" },
  ],

  activities: [
    { title: "울산대학교 개발동아리 가온누리", role: "회장", org: "", date: "2026.03 ~" },
    { title: "26-2학기 웹 멘토링", role: "스터디장", org: "가온누리", date: "2026.09" },
    { title: "한이음 드림업", role: "팀 프로젝트", org: "과학기술정보통신부", date: "2026.03 ~ 2026.11" },
    { title: "현대점프스쿨", role: "멘토링", org: "현대차그룹", date: "2026.03 ~ 2026.12" },
    { title: "26-1학기 프론트엔드 스터디", role: "스터디장", org: "가온누리", date: "2026.03" },
    { title: "SW서포터즈 (1학기, 2학기)", role: "성과창출", org: "SW사업단", date: "2026.04 ~" },
    { title: "울산미래산업박람회 WAVE 부스 운영", role: "체험 부스 운영", org: "가온누리", date: "2026.09" },
    { title: "FECONF 2026", role: "참가", org: "", date: "2026.10" },
    { title: "겨울방학 프론트엔드 스터디", role: "스터디장", org: "가온누리", date: "2026.01" },
    { title: "UMC 5기 (Univ MakeUs Challenge)", role: "프론트엔드(React)", org: "대학연합 IT 동아리", date: "2023 하반기" },
  ],

  certificates: [{ title: "SQLD", org: "한국데이터산업진흥원", date: "2026.08" }],
};
