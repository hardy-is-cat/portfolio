import styled from "styled-components";

import AccodianEl from "./AccordianEl";

const skills = [
  {
    title: "React",
    content:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
  {
    title: "React",
    content:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
  {
    title: "React",
    content:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
  {
    title: "React",
    content:
      "재사용성을 고려한 컴포넌트를 만들고 조합하여 유지보수가 용이한 UI를 구현할 수 있습니다. 커스텀 hooks를 만들어 반복되는 로직을 재사용 할 수 있습니다.",
  },
];

function Accodian() {
  return (
    <DlBlock>
      {skills.map((skill, i) => {
        return (
          <AccodianEl key={i} title={skill.title} content={skill.content} />
        );
      })}
    </DlBlock>
  );
}

export default Accodian;

const DlBlock = styled.dl`
  max-width: 820px;
  margin: 0 auto;
`;
