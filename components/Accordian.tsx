import styled from "styled-components";
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
      {data.map((data, i) => {
        return (
          <AccordianEl key={i} title={data.title} content={data.content} />
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
