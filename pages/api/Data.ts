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
    title: "Styled-Components",
    content:
      "Styled-components의 문법을 이해하여 다양한 컴포넌트의 스타일링을 할 수 있고, 전역 스타일도 쉽게 적용할 수 있습니다.",
  },
  {
    title: "Recoil",
    content:
      "전역의 상태를 관리하면서 props drilling을 막고 이를 이용한 모달창 등을 만들 수 있습니다.",
  },
  {
    title: "Firebase",
    content:
      "필요한 데이터 등을 Firebase을 이용해 저장하고 불러와서 사용할 수 있습니다.",
  },
  {
    title: "Figma",
    content:
      "컴포넌트 기능을 이용하여 UX를 고려한 모바일 및 데스크탑의 UI를 작성할 수 있습니다.",
  },
];

export const skillsNormal = [
  {
    title: "빠른 이해력",
    content:
      "새로운 물건, 새로운 일에 대한 이해가 빠르고 설명서도 꼼꼼히 읽어봅니다. 가구나 데스크탑 등도 직접 조립하는 편.",
  },
  {
    title: "계획형 인간",
    content:
      "계획을 짜고 그 계획대로 움직이는 것을 좋아합니다. 여행이라도 간다면 일정표 작성은 필수!",
  },
  {
    title: "집순이",
    content:
      "대체로 집에 있는 것을 선호합니다. 맥주, 게임기, 고양이가 있는 집은 그야말로 천국",
  },
  {
    title: "요리 금손",
    content:
      "어떤 요리도 척척. 그 중 자신 있는건 일식, 한식. 맛있는 음식이 있다면 직접 해먹어봐야 직성이 풀리는 성격입니다.",
  },
];

export const introduceTextDev = [
  {
    id: 1,
    title: "함께 성장하는 것의 가치를 생각합니다",
    paragraph: `멋쟁이 사자처럼 프론트엔드스쿨 과정을 거치면서,<br/>
    혼자만 잘 하는 것보다 함께 잘 하는 것이 더욱 단단한 성장의 발판이 된다는 것을 느꼈습니다.<br/>
    멋진 팀원들과 함께 성장해가고 싶습니다.`,
  },
  {
    id: 2,
    title: "웹디자인 업무 경험으로 협업에 강합니다",
    paragraph: `워드프레스를 이용한 웹사이트 제작 업체에서의 웹디자인 업무 경험이 있습니다.<br/>
    또한 리메인 웹프로페셔널 과정을 수강하면서<br/>
    웹디자인 시스템에 대한 이해도를 길러, 협업에서도 원활한 소통을 이룰 수 있습니다.`,
  },
  {
    id: 3,
    title: "사용자의 입장에서 한번 더 생각합니다",
    paragraph: `웹 서비스들은 회사와 브랜드의 얼굴이라고 생각합니다.<br/>
      비대면으로 사용자와 만나는 창구로서,<br/>
      사용자에게 좋은 인상을 남길 수 있는 서비스를 만들고 싶습니다.`,
  },
];

export const introduceTextNormal = [
  {
    id: 1,
    title: "외향형 인간으로 생각할 정도의 친화력 보유자",
    paragraph: `어느 직장, 어느 무리마다 항상 따라오는 성격 좋다는 이야기.<br/>
    내향형 인간이지만 아무도 믿지 않는 친화력.<br/>
    친해지고 싶은 사람에게 최선을 다 합니다.`,
  },
  {
    id: 2,
    title: "이구역의 돼지를 지향합니다",
    paragraph: `먹기 위해 산다고 자신있게 말할 수 있는 사람,<br/>
    먹는 것뿐만 아니라 요리도 좋아합니다. 최고의 요리는 집밥.<br/>
    언제나 먹는 것에 진심이며, 새로운 맛을 탐구합니다.`,
  },
  {
    id: 3,
    title: "넒은 분야의 잡지식맨",
    paragraph: `다양한 서브컬쳐에 열려있습니다.<br/>
      특히나 관심있는 분야는 열심히 파고 드는 사람.<br/>
      술, 음식, 게임, 음악 등등. 새로운 장르는 언제나 환영입니다.`,
  },
];

export type ProjectContentTypes = {
  title: string;
  info: {
    introduce: string;
    durationOfWork: string;
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
  movieDog: ProjectContentTypes;
  carZip: ProjectContentTypes;
  taing: ProjectContentTypes;
};

export const projectModalContent: ProjectModalTypes = {
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
        buildSite: "https://movie-dog.vercel.app/",
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
          "TMBD api에서 불러온 정보와 파이어베이스에 저장한 리뷰 정보를 swiper.js로 제작한 메인 비주얼과 카드 형식의 스와이퍼에 출력",
          "스와이퍼 커스터마이징",
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
          "한 줄 평 작성시 영화 고유 id를 함께 저장하여, 하단 스와이퍼에 해당 영화의 한 줄 평만 출력",
          "TMDB에서 자체 제공하는 비슷한 영화 스와이퍼 출력",
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
      skills: [
        "React",
        "Vite",
        "Firebase",
        "Styled-Components",
        "EsLint",
        "Prettier",
      ],
      link: {
        github: "https://github.com/LikeLion-FE-Final-Project03/car-zip",
        presentation:
          "https://docs.google.com/presentation/d/10ZIoQ7_o5HqIxnhy2IyQqxFqRTypoNFluwr22lURGCE/edit#slide=id.g1f9f45324dc_0_109",
      },
    },
    screenshot: [
      "/images/screenshot/screenshot-carzip-01.gif",
      "/images/screenshot/screenshot-carzip-02.gif",
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
          "즐겨찾기 데이터 베이스를 생성해 주차장 고유 ID와 즐겨찾기 여부, 사용자 UID 저장",
        ],
      },
      { title: "스타일드 컴포넌트를 이용한 CSS 적용" },
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
          "팀의 조장을 맡아 조원들에게 역할 분배, 팀원들의 코드 리뷰",
          "프로젝트 초기설정(prettier, eslint, 코드 컨벤션, 커밋컨벤션 설정 등) 및 깃허브 협업 방법 검색 및 공유",
          "swiper.js를 사용해 메인 페이지 슬라이더 구현",
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
  food: GalleryContentTypes;
  hardy: GalleryContentTypes;
  zual: GalleryContentTypes;
};

export const galleryModalContent: GalleryModalTypes = {
  food: {
    title: "이것저것 만든 음식들",
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
      "참치 초밥, 일본식 닭튀김, 시메사바 등등 주로 일식위주로 만들어 먹곤 합니다. 먹는게 제일 좋아요.",
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
      "세상에서 제일 귀여운 고양이!!!!!! 매주 메일링 서비스 가능합니다. 많관부🙏",
  },
  zual: {
    title: "조정현은 zual입니다",
    picture: [
      "/images/gallery/pic-zual1.jpeg",
      "/images/gallery/pic-zual2.jpeg",
      "/images/gallery/pic-zual3.jpeg",
      "/images/gallery/pic-zual4.jpeg",
    ],
    description:
      "zual은 조정현입니다. 고등학교때 친구가 멍때리는 모습을 보고 침 좔좔 흘릴것 같다고 해서 붙여진 별명인데, 마음에 들어서 계속 쓰고 있습니다.<br/>사진 찍는걸 좋아하고 필름카메라도 좋아합니다. 저번 여름엔 스노클링의 재미를 알아 잡은 조개로 또 이것저것 해먹었습니다.<br/>집에서 음악 듣고 게임 하는 것도 좋아합니다. 인생게임은 몬스터헌터라고...25년에 신작 나오는 게임인데 정말 재밌습니다...🥺",
  },
};
