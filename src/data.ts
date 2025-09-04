type IntroContentTypes = {
  [type: string]: {
    profile: string;
    headline: string;
    description: { title: string; description: string }[];
  };
};

export const introContents: IntroContentTypes = {
  developer: {
    profile: "/images/pic-profile.jpg",
    headline: "어떤 개발자인가요?",
    description: [
      {
        title: "함께 성장하는 것의 가치를 생각합니다",
        description: `멋쟁이사자처럼 프론트엔드스쿨 과정을 거치며<br>나 혼자만 잘 하는 것보단, 다른 사람의 성장을 돕고<br>나의 성장도 함게 이루는 과정이 중요하다고 느꼈습니다.<br>멋진 팀원들과 함께 성장해가고 싶습니다.`,
      },
      {
        title: "웹디자인 업무 경험으로 협업에 강합니다",
        description: `워드프레스 기반 웹사이트 제작 업체에서의 웹디자인 업무와<br>리메인 웹프로페셔널 과정을 수강하면서<br>UX의 중요도와 전반적인 웹디자인 시스템에 대한 이해도를 길렀고,<br>이를 통해 협업시에 보다 원활한 소통을 이룰 수 있습니다.`,
      },
      {
        title: "사용자의 입장에서 한번 더 생각합니다",
        description: `웹 서비스는 평균 59초만에 사용자에게 평가된다고 합니다.<br>비대면으로 사용자와 만나는 웹서비스를 구축하는 개발자로서,<br>사용자에게 좋은 인상을 남길 수 있는 서비스를 만들고 싶습니다.`,
      },
    ],
  },
  normal: {
    profile: "/images/zual.jpeg",
    headline: "어떤 사람인가요?",
    description: [
      {
        title: "어디서나 금세 적응하는 친화력 보유자",
        description: `어느 곳을 가도 항상 따라오는 그 사람 성격 좋다는 이야기<br>일단 옆에 두면 재밌는 사람입니다.`,
      },
      {
        title: "이 구역의 돼지를 지향합니다",
        description: `먹기 위해 산다고 자신있게 말할 수 있는 사람,<br>직접 요리하고 어울리는 술을 페어링 하는 것이 삶의 낙입니다.<br>언제나 맛있는 음식에 진심이며, 새로운 맛을 탐구합니다.`,
      },
      {
        title: "걸어다니는 알쓸신잡 인간",
        description: `새로운 지식 쌓는 것을 좋아하며,<br>때론 이런 잡지식을 바탕으로 금방 업무에 적응하기도 합니다.<br>특히나 관심있는 분야는 열심히 파고 드는 성격입니다.`,
      },
    ],
  },
};

export type CardTypes = {
  title: string;
  thumb: string;
  bgColor: string;
  titleColor?: string;
};

export type ProjectModalTypes = {
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
    contribution: string;
  };
  screenshot: string[];
  description: {
    title: string;
    detail?: string[];
  }[];
};

export type GalleryModalTypes = {
  title: string;
  picture: string[];
  description: string;
};

export type ProjectContentTypes = {
  id: number;
  card: CardTypes;
  modal: ProjectModalTypes;
};

export const projectContent: ProjectContentTypes[] = [
  {
    id: 5,
    card: {
      title: "GOYEONG DIARY",
      thumb: "/images/logo-goyeong-diary.png",
      bgColor: "#AD58E1",
    },
    modal: {
      title: "Next.js 개인 토이프로젝트 - 고영일기",
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
        contribution: "100%",
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
  },
  {
    id: 4,
    card: {
      title: "JOJIJU",
      thumb: "/images/logo-jojiju.png",
      bgColor: "#fff3e3",
      titleColor: "#222",
    },
    modal: {
      title: "Next.js 4인 팀프로젝트 - 조지주(PickYourPotion)",
      info: {
        introduce:
          "調(고를 조), 持(가질 지), 酒(술 주). 간단한 문답을 통해 나에게 맞는 전통주를 추천받고 이를 구매할 수 있는 이커머스 웹사이트",
        durationOfWork: "2024.07.29 ~ 2024.08.27",
        skills: [
          "TypeScript",
          "Next.js",
          "TailwindCSS",
          "Zustand",
          "Swiper.js",
        ],
        link: {
          github: "https://github.com/hardy-is-cat/PickYourPotion",
          // buildSite: "https://www.pickyourpotion.store",
        },
        contribution: "25%",
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
  },
  {
    id: 3,
    card: {
      title: "MOVIE DOG",
      thumb: "/images/logo-moviedog.png",
      bgColor: "#C58555",
    },
    modal: {
      title: "Next.js 2인 토이프로젝트 - 무비독(MovieDog)",
      info: {
        introduce:
          "TMDB 영화정보 api를 이용한 영화정보 조회 및 리뷰 작성 서비스(반응형)",
        durationOfWork:
          "2023.09.05 ~ 2023.11.25(1차 개발) / 25.05.31 - 25.06.24(리팩토링 및 기능 개선)",
        skills: [
          "TypeScript",
          "Next.js",
          "Styled-Components",
          "Firebase",
          "Swiper.js",
        ],
        link: {
          github: "https://github.com/hardy-is-cat/movie-dog",
          buildSite: "https://movie-dog-pi.vercel.app/",
        },
        contribution: "70%",
      },
      screenshot: [
        "/images/screenshot/screenshot-moviedog-01.png",
        "/images/screenshot/screenshot-moviedog-02.png",
        "/images/screenshot/screenshot-moviedog-03.png",
        "/images/screenshot/screenshot-moviedog-04.png",
      ],
      description: [
        {
          title: "리팩토링",
          detail: [
            "기존 클라이언트 사이드에서 API요청 하던 것을 getServerSideProps를 이용하여 서버 사이드에서 요청하도록 수정",
            "장르별, 년도별 영화 리스트 페이지 및 검색 결과 페이지 UI 수정 및 로직 개선",
            "이미지 최적화",
            "Light House 검사시 기존 45점에서 70점으로 성능 개선",
          ],
        },
        { title: "와이어 프레임 작성, 피그마 시안 작업" },
        {
          title: "메인페이지",
          detail: [
            "Swiper.js 커스터마이징",
            "Swiper.js로 제작한 메인 비주얼과 카드 스와이퍼에 TMBD API에서 불러온 정보와 파이어베이스에 저장한 리뷰 정보를 출력",
          ],
        },
        {
          title: "장르별, 년도별 영화 카테고리 페이지",
          detail: [
            "장르별 혹은 년도별로 나뉘어진 영화를 볼 수 있도록 카테고리 형식으로 나눔",
            "API 응답으로 받은 전체 페이지 수를 기반으로 페이지네이션 컴포넌트 제작",
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
  },
  {
    id: 2,
    card: {
      title: "CARZIP",
      thumb: "/images/logo-carzip.png",
      bgColor: "#3C454C",
    },
    modal: {
      title: "리액트 4인 팀프로젝트 - 카집(CarZip)",
      info: {
        introduce: "공공데이터와 카카오맵API를 이용한 주차장 정보 공유 서비스",
        durationOfWork: "2023.03.09 ~ 2023.03.28",
        skills: ["React", "Vite", "Firebase", "Styled-Components"],
        link: {
          github: "https://github.com/LikeLion-FE-Final-Project03/car-zip",
          presentation:
            "https://docs.google.com/presentation/d/10ZIoQ7_o5HqIxnhy2IyQqxFqRTypoNFluwr22lURGCE/edit#slide=id.g1f9f45324dc_0_109",
        },
        contribution: "20%",
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
  },
  {
    id: 1,
    card: {
      title: "TAING",
      thumb: "/images/logo-taing.png",
      bgColor: "#FF153C",
    },
    modal: {
      title: "바닐라JS 4인 팀프로젝트 - 타잉(TAING)",
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
        contribution: "30%",
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
  },
];

export type GalleryContentTypes = {
  id: number;
  card: CardTypes;
  modal: GalleryModalTypes;
};

export const galleryContent: GalleryContentTypes[] = [
  {
    id: 3,
    card: {
      title: "FOOD",
      thumb: "/images/icon-food.svg",
      bgColor: "#de334f",
    },
    modal: {
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
        "쉬는 날엔 집에서 요리하며 일주일 간의 스트레스를 해소하는 것을 좋아합니다. 식재료를 하나하나 조합해 맛있는 음식을 만드는것 또한 코딩과 같지 않을까..하는 생각을 합니다.",
    },
  },
  {
    id: 2,
    card: {
      title: "HARDY",
      thumb: "/images/icon-cat.svg",
      bgColor: "#3C454C",
    },
    modal: {
      title: "세젤귀 고양이 하디",
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
        "올 해 7살 생일을 맞은 세상에서 제일 귀여운 고양이 하디입니다. 제일 사랑하는 것 중 하나예요.",
    },
  },
  {
    id: 1,
    card: {
      title: "HARDY",
      thumb: "/images/icon-woman.svg",
      bgColor: "#aa40d4",
    },
    modal: {
      title: "ZUAL이란?",
      picture: [
        "/images/gallery/pic-zual1.jpeg",
        "/images/gallery/pic-zual2.jpeg",
        "/images/gallery/pic-zual3.jpeg",
        "/images/gallery/pic-zual4.jpeg",
      ],
      description: `ZUAL은 고등학교 때 멍 때리는 모습을 보고 친구가 침 좔좔 흘릴 것 같은 표정이라며 붙여준 별명인데, 쓰다보니 입에 챡 붙어서 계속 쓰고 있습니다.
        취미로는 필름 카메라와 사진 찍는 걸 좋아합니다. 집에서 음악 듣고 게임하는 것도 좋아하는데, 제일 좋아하는 게임은 몬스터헌터입니다. 힘세고 강한 해머가 최애무기입니다🔨`,
    },
  },
];

export const skillsDev = [
  {
    title: "React",
    description:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript의 자료형을 이해하고, 다양한 메서드를 이용하여 DOM을 조작하고 함수형 프로그래밍을 할 수 있습니다.",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript의 자료형을 이해하고, 상황에 맞는 타입 지정으로 예기치 않은 오류를 막을 수 있으며, 제네릭을 사용해 유연한 타입 지정을 할 수 있습니다.",
  },
  {
    title: "Next.js",
    description:
      "SSR 방식을 이용해 빠른 랜더링을 할 수 있고, 동적 라우팅을 이용해 상황에 따른 url을 빌드할 수 있습니다.",
  },
  {
    title: "Styled-Components",
    description:
      "Styled-Components의 문법을 이해하여 다양한 컴포넌트의 스타일링을 할 수 있고, 전역 스타일도 쉽게 적용할 수 있습니다.",
  },
  {
    title: "TailwindCSS",
    description:
      "TailwindCSS의 문법을 이해하여 다양한 컴포넌트의 스타일링을 할 수 있고, 전역 스타일도 쉽게 적용할 수 있습니다.",
  },
  {
    title: "Three.js",
    description:
      "camera, mesh, material, scene 등의 개념을 이해하고, React Three Fiber 라이브러리를 이용해 3D 오브젝트를 활용하여 충돌 감지 등의 간단한 상호 동작을 구현할 수 있습니다.",
  },
  {
    title: "Recoil",
    description:
      "전역의 상태를 관리하면서 props drilling을 막고 이를 이용한 모달창 등을 만들 수 있습니다.",
  },
  {
    title: "Firebase",
    description:
      "Firebase에 데이터를 저장하고 불러와 사용할 수 있으며, 이를 통한 회원 가입 기능을 구현할 수 있습니다.",
  },
  {
    title: "Figma",
    description:
      "컴포넌트 기능을 이용하여 UX를 고려한 모바일 및 데스크탑의 UI를 작성할 수 있습니다.",
  },
] as const;
