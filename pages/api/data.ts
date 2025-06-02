/* eslint-disable */

export const skillsDev = [
  {
    title: "React",
    content:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript의 자료형을 이해하고, 다양한 메서드를 이용하여 DOM을 조작하고 함수형 프로그래밍을 할 수 있습니다.",
  },
  {
    title: "TypeScript",
    content:
      "TypeScript의 자료형을 이해하고, 상황에 맞는 타입 지정으로 예기치 않은 오류를 막을 수 있으며, 제네릭을 사용해 유연한 타입 지정을 할 수 있습니다.",
  },
  {
    title: "Next.js",
    content:
      "SSR 방식을 이용해 빠른 랜더링을 할 수 있고, 동적 라우팅을 이용해 상황에 따른 url을 빌드할 수 있습니다.",
  },
  {
    title: "Styled-Components, TailwindCSS",
    content:
      "Styled-Components와 TailwindCSS의 문법을 이해하여 다양한 컴포넌트의 스타일링을 할 수 있고, 전역 스타일도 쉽게 적용할 수 있습니다.",
  },
  {
    title: "Recoil",
    content:
      "전역의 상태를 관리하면서 props drilling을 막고 이를 이용한 모달창 등을 만들 수 있습니다.",
  },
  {
    title: "Firebase",
    content: "필요한 데이터를 Firebase에 저장하고 불러와 사용할 수 있습니다.",
  },
  {
    title: "Figma",
    content:
      "컴포넌트 기능을 이용하여 UX를 고려한 모바일 및 데스크탑의 UI를 작성할 수 있습니다.",
  },
];

export const skillsNormal = [
  {
    title: "빠른 이해력과 분석하는 성격",
    content:
      "새로운 물건, 새로운 일에 대한 이해가 빠르고, 설명서가 있다면 꼼꼼히 읽어봅니다. 가구나 데스크탑 등을 직접 조립하면서 구조를 분석하고 이해하는 것을 좋아합니다.",
  },
  {
    title: "계획형 인간",
    content:
      "계획을 짜고 그 계획대로 움직이는 것을 좋아합니다. 여행갈 땐 분단위 계획표를 짜두어야 안심하는 편입니다.",
  },
  {
    title: "집순이",
    content:
      "일 할 때를 제외하곤 대체로 집에 있는 것을 선호합니다. 이불 밖은 위험해..!",
  },
  {
    title: "금손",
    content:
      "직접 요리해 먹는 것을 좋아합니다. 일식, 한식을 좋아하며 궁금한 요리는 직접 해봐야 직성이 풀리는 성격입니다.",
  },
];

export const introduceTextDev = [
  {
    id: 1,
    title: "함께 성장하는 것의 가치를 생각합니다",
    paragraph: `멋쟁이사자처럼 프론트엔드스쿨 과정을 거치며<br/>
    나 혼자만 잘 하는 것보단, 다른 사람의 성장을 돕고<br/>
    나의 성장도 함게 이루는 과정이 중요하다고 느꼈습니다.<br/>
    멋진 팀원들과 함께 성장해가고 싶습니다.`,
  },
  {
    id: 2,
    title: "웹디자인 업무 경험으로 협업에 강합니다",
    paragraph: `워드프레스 기반 웹사이트 제작 업체에서의 웹디자인 업무와<br/>
    리메인 웹프로페셔널 과정을 수강하면서<br/>
    UX의 중요도와 전반적인 웹디자인 시스템에 대한 이해도를 길렀고,<br/>
    이를 통해 협업시에 보다 원활한 소통을 이룰 수 있습니다.`,
  },
  {
    id: 3,
    title: "사용자의 입장에서 한번 더 생각합니다",
    paragraph: `웹 서비스는 평균 59초만에 사용자에게 평가된다고 합니다.<br/>
      비대면으로 사용자와 만나는 웹서비스를 구축하는 개발자로서,<br/>
      사용자에게 좋은 인상을 남길 수 있는 서비스를 만들고 싶습니다.`,
  },
];

export const introduceTextNormal = [
  {
    id: 1,
    title: "어디서나 적응 가능한 친화력 보유자",
    paragraph: `어느 곳을 가도 항상 따라오는 그 사람 성격 좋다는 이야기.<br/>
    내향형 인간이라곤 믿기지 않는 친화력.<br/>
    일단 옆에 두면 재밌는 사람입니다.`,
  },
  {
    id: 2,
    title: "이 구역의 돼지를 지향합니다",
    paragraph: `먹기 위해 산다고 자신있게 말할 수 있는 사람,<br/>
    먹는 것만큼 요리도 좋아합니다. 최고의 요리는 집밥.<br/>
    언제나 맛있는 음식에 진심이며, 새로운 맛을 탐구합니다.`,
  },
  {
    id: 3,
    title: "넒은 분야의 잡지식인간",
    paragraph: `다양한 잡지식에 열려있습니다.<br/>
    술, 음식, 게임, 음악 등등<br/>
    특히나 관심있는 분야는 열심히 파고 드는 오타쿠.`,
  },
];

export type ProjectContentTypes = {
  title: string;
  info: {
    introduce: string;
    durationOfWork?: string;
    skills: string[];
    link: {
      github?: string;
      buildSite?: string;
      presentation?: string;
    };
  };
  screenshot: string[];
  description: {
    title: string;
    detail?: string[];
  }[];
};

type ProjectModalTypes = {
  [projectName: string]: ProjectContentTypes;
};

export const projectModalContent: ProjectModalTypes = {
  "goyeong-diary": {
    title: "Next.js 개인 프로젝트 - 고영일기",
    info: {
      introduce: "나의 고양이의 하루를 기록하고 확인할 수 있는 서비스",
      skills: [
        "TypeScript",
        "Next.js",
        "Styled-Components",
        "Firebase",
        "Recoil",
      ],
      link: {
        github: "https://github.com/hardy-is-cat/goyeong-diary",
        buildSite: "https://goyeong-diary.vercel.app/",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-goyeong-01.jpg",
      "/images/screenshot/screenshot-goyeong-02.jpg",
      "/images/screenshot/screenshot-goyeong-03.jpg",
      "/images/screenshot/screenshot-goyeong-04.jpg",
    ],
    description: [
      { title: "피그마 UI 디자인 시안 제작" },
      {
        title: "회원가입, 로그인",
        detail: [
          "Firebase를 이용해 이메일을 기반으로 한 회원가입 및 로그인 기능 구현.",
        ],
      },
      {
        title: "Firebase Database를 이용한 각종 기록 저장",
        detail: [
          "고양이의 이름, 생년월일, 사진을 등록 및 수정",
          "무료 이미지 호스팅 서비스인 ImgBB의 API를 이용해 사진을 업로드하고, 이미지 주소를 별도로 저장",
          "화장실, 식사, 놀이, 접종 기록을 Firebase Database에 저장 후 Table 형식으로 불러옴.",
        ],
      },
    ],
  },
  jojiju: {
    title: "Next.js 팀프로젝트 - 조지주(PickYourPotion)",
    info: {
      introduce:
        "調(고를 조), 持(가질 지), 酒(술 주). 간단한 문답을 통해 나에게 맞는 전통주를 추천받고 이를 구매할 수 있는 이커머스 웹사이트",
      durationOfWork: "2024.07.29 ~ 2024.08.27",
      skills: ["TypeScript", "Next.js", "TailwindCSS", "Zustand", "Swiper.js"],
      link: {
        github: "https://github.com/hardy-is-cat/PickYourPotion",
        buildSite: "https://www.pickyourpotion.store",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-jojiju-01.png",
      "/images/screenshot/screenshot-jojiju-02.png",
      "/images/screenshot/screenshot-jojiju-03.png",
      "/images/screenshot/screenshot-jojiju-04.png",
    ],
    description: [
      { title: "피그마 UI 디자인 시안 제작" },
      {
        title: "나에게 맞는 전통주 찾기",
        detail: [
          "최근 유행하는 문답 테스트 방식을 간단하게 구현하여 사용자의 상황에 맞는 술을 추천해주는 랜딩페이지 제작.",
          "각 선택값에 어울리는 전통주 id를 배열로 관리하고, fetch하여 결과창에 불러옴.",
          "주량, 당도, 상황 등에 맞는 svg 일러스트 제작 후 이를 컴포넌트화. 각각의 path에 커스텀 애니메이션을 적용.",
        ],
      },
      {
        title: "메인페이지",
        detail: [
          "Swiper.js 라이브러리를 커스텀하여 적용",
          "상품 카드 공통 컴포넌트 생성",
        ],
      },
      {
        title: "결제 관련",
        detail: [
          "포트원의 본인인증 API를 이용한 성인인증 구현.",
          "상품 구매시 stateless modal을 이용하여 최초 1회 성인인증을 요구하는 모달창 생성.",
          "본인인증이 완료되면 포트원 서버에 사용자 정보 요청 후 받아온 생년월일을 계산하여 성인 여부를 판단.",
          "성인인증이 완료된 유저는 유저 데이터에 isAdult 값을 true로 저장해 추가 인증이 필요하지 않게 함.",
        ],
      },
    ],
  },
  movieDog: {
    title: "Next.js 사이드팀프로젝트 - 무비독(moviedog)",
    info: {
      introduce:
        "TMDB 영화정보 api를 이용한 영화정보 조회 및 리뷰 작성 서비스(반응형)",
      durationOfWork: "2023.09.05 ~ 2023.11.25",
      skills: [
        "TypeScript",
        "Next.js",
        "Styled-Components",
        "Firebase",
        "Swiper.js",
      ],
      link: {
        github: "https://github.com/movie-dog/movie-dog",
        buildSite: "https://main.drpe221ejddia.amplifyapp.com/",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-moviedog-01.png",
      "/images/screenshot/screenshot-moviedog-02.png",
      "/images/screenshot/screenshot-moviedog-03.png",
      "/images/screenshot/screenshot-moviedog-04.png",
    ],
    description: [
      { title: "와이어 프레임 작성, 피그마 시안 작업" },
      {
        title: "메인페이지",
        detail: [
          "Swiper.js 커스터마이징",
          "Swiper.js로 제작한 메인 비주얼과 카드 스와이퍼에 TMBD API에서 불러온 정보와 파이어베이스에 저장한 리뷰 정보를 출력",
        ],
      },
      {
        title: "장르별 영화 카테고리 페이지",
        detail: [
          "장르별로 나뉘어진 영화를 볼 수 있도록 카테고리 형식으로 나눔",
          "페이지네이션 컴포넌트 제작",
        ],
      },
      {
        title: "영화정보 상세페이지",
        detail: [
          "영화의 고유 id를 전달받아 해당 영화의 정보를 랜더링",
          "로그인 여부에 따라 한 줄 평, 찜 기능을 사용할 수 있게 나눔. 로그아웃 상태라면 로그인 알림",
          "별점을 선택한 후, 한 줄 평을 작성하면 파이어베이스에 저장, 이후 한 줄 평 재작성시 이전 리뷰정보를 불러와 수정 가능",
          "한 줄 평 작성시 영화 고유 id를 함께 저장하여, 상세페이지 하단 스와이퍼에 해당 영화의 한 줄 평 출력",
          "TMDB에서 자체 제공하는 비슷한 영화 API를 이용해 스와이퍼 출력",
          "영화 찜하기, 찜삭제 기능 구현",
        ],
      },
      {
        title: "검색 페이지",
        detail: ["영화의 제목으로 검색 가능한 기능 구현"],
      },
    ],
  },
  carZip: {
    title: "리액트 팀프로젝트 - 카집(CarZip)",
    info: {
      introduce: "공공데이터와 카카오맵API를 이용한 주차장 정보 공유 서비스",
      durationOfWork: "2023.03.09 ~ 2023.03.28",
      skills: ["React", "Vite", "Firebase", "Styled-Components"],
      link: {
        github: "https://github.com/LikeLion-FE-Final-Project03/car-zip",
        presentation:
          "https://docs.google.com/presentation/d/10ZIoQ7_o5HqIxnhy2IyQqxFqRTypoNFluwr22lURGCE/edit#slide=id.g1f9f45324dc_0_109",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-carzip-01.jpg",
      "/images/screenshot/screenshot-carzip-02.jpg",
    ],
    description: [
      { title: "팀의 조장을 맡아 역할 분배" },
      { title: "와이어 프레임 작성, 피그마 시안 작업" },
      {
        title: "주차장 정보 상세보기 페이지",
        detail: [
          "이전 페이지에서 주차장의 고유 ID를 props로 받아와 파이어 베이스에 저장된 주차장 데이터 로드 후 랜더링",
          "즐겨찾기 데이터 베이스를 생성해 주차장 고유 ID와 즐겨찾기 여부, 사용자 UID 저장",
          "Clipboard API 를 이용하여 해당 주차장의 주소 복사",
          "유저의 디바이스 정보를 확인하여 pc와 모바일의 전화 동작을 구분",
        ],
      },
      {
        title: "주차비 사전 계산 페이지",
        detail: [
          "주차장 가격 정보를 받아와 사용자가 시간을 입력하면 예상 주차비를 계산",
          "주차비 정보가 없을 경우 계산 불가 텍스트를 조건부 랜더링",
        ],
      },
    ],
  },
  taing: {
    title: "바닐라JS 팀프로젝트 - 타잉(TAING)",
    info: {
      introduce:
        "국내 OTT 서비스인 티빙의 UI를 참고하여 제작한 반응형 웹사이트",
      durationOfWork: "2023.01.27 ~ 2023.02.08",
      skills: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
      link: {
        github: "https://github.com/likelion-fe4-js3/taing",
        presentation:
          "https://www.canva.com/design/DAFZ-NRdK0s/8ydvSRLYPgARcu7E7lQRsw/view?analyticsCorrelationId=ba6c2384-97dd-4673-a52d-392218bc957c",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-taing-01.png",
      "/images/screenshot/screenshot-taing-02.png",
      "/images/screenshot/screenshot-taing-03.png",
      "/images/screenshot/screenshot-taing-04.png",
    ],
    description: [
      {
        title: "조장, 메인페이지",
        detail: [
          "팀의 조장을 맡아 조원들에게 역할 분배, 기술 담당으로 코드 리뷰",
          "프로젝트 초기설정(prettier, eslint, 코드 컨벤션, 커밋컨벤션 설정 등) 및 깃허브 협업 방법 검색 및 공유",
          "swiper.js를 사용해 메인 페이지 슬라이더 구현, Tab키로 각 슬라이드에 접근 가능하게 설정",
          "data.json 파일을 생성해 슬라이더 내부 컨텐츠를 비동기 통신을 이용하여 랜더링",
          "슬라이더의 각 컨텐츠에 aria-label 속성을 추가하여 접근성 향상",
        ],
      },
    ],
  },
};

export type GalleryContentTypes = {
  title: string;
  picture: string[];
  description: string;
};

type GalleryModalTypes = {
  [title: string]: GalleryContentTypes;
};

export const galleryModalContent: GalleryModalTypes = {
  food: {
    title: "이구역 쩝쩝박사",
    picture: [
      "/images/gallery/pic-food1.jpeg",
      "/images/gallery/pic-food2.jpeg",
      "/images/gallery/pic-food3.jpeg",
      "/images/gallery/pic-food4.jpeg",
      "/images/gallery/pic-food5.jpeg",
      "/images/gallery/pic-food6.jpeg",
      "/images/gallery/pic-food7.jpeg",
      "/images/gallery/pic-food8.jpeg",
    ],
    description:
      "스트레스 해소의 한 방식으로 요리하는 것을 좋아합니다. 먹는 게 제일 좋아요.",
  },
  hardy: {
    title: "최고의 고양이 하디",
    picture: [
      "/images/gallery/pic-hardy1.jpeg",
      "/images/gallery/pic-hardy2.jpeg",
      "/images/gallery/pic-hardy3.jpeg",
      "/images/gallery/pic-hardy4.jpeg",
      "/images/gallery/pic-hardy5.jpeg",
      "/images/gallery/pic-hardy6.jpeg",
      "/images/gallery/pic-hardy7.jpeg",
      "/images/gallery/pic-hardy8.jpeg",
      "/images/gallery/pic-hardy9.jpeg",
    ],
    description:
      "세상에서 제일 귀여운 고양이라고 생각하는 하디입니다. 하디를 한 번 본 사람은 절대 잊지 못한다는 전설이...",
  },
  zual: {
    title: "ZUAL의 유래",
    picture: [
      "/images/gallery/pic-zual1.jpeg",
      "/images/gallery/pic-zual2.jpeg",
      "/images/gallery/pic-zual3.jpeg",
      "/images/gallery/pic-zual4.jpeg",
    ],
    description: `타이틀인 ZUAL은 어렸을 때부터 사용한 별명입니다. 고등학교 때 멍 때리는 모습을 보고 친구가 침 좔좔 흘릴 것 같다고 해서 붙여준 별명인데, 마음에 들어서 계속 쓰고 있습니다.<br/>
      필름 카메라와 사진 찍는 걸 좋아합니다. 집에서 음악 듣고 게임하는 것도 좋아합니다.<br/>
      제일 좋아하는 게임은 몬스터헌터입니다. 해머가 필요하신 분은 연락 주세요...🥺`,
  },
};
