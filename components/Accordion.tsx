import styled from "@emotion/styled";
import useScrollFadeIn from "utils/hooks/useScrollFadeIn";
import AccordionEl from "./AccordionEl";

type AccordionTypes = {
  data: {
    title: string;
    content: string;
  }[];
};

function Accordion({ data }: AccordionTypes) {
  return (
    <DlBlock {...useScrollFadeIn<HTMLDListElement>()}>
      {data.map((item, i) => {
        return (
          <AccordionEl key={i} title={item.title} content={item.content} />
        );
      })}
    </DlBlock>
  );
}

export default Accordion;

const DlBlock = styled.dl`
  max-width: 860px;
  padding: 0 20px;
  margin: 0 auto;
`;
