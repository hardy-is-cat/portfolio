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
