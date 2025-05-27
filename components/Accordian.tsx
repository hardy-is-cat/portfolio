import styled from "@emotion/styled";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import AccordianEl from "./AccordianEl";

type AccordianTypes = {
  data: {
    title: string;
    content: string;
  }[];
};

function Accordian({ data }: AccordianTypes) {
  return (
    <DlBlock {...useScrollFadeIn<HTMLDListElement>()}>
      {data.map((item, i) => {
        return (
          <AccordianEl key={i} title={item.title} content={item.content} />
        );
      })}
    </DlBlock>
  );
}

export default Accordian;

const DlBlock = styled.dl`
  max-width: 860px;
  padding: 0 20px;
  margin: 0 auto;
`;
