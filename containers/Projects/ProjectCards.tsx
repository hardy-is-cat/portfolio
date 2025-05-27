import styled from "@emotion/styled";

import carZip from "public/images/logo-carzip.png";
import taing from "public/images/logo-taing.png";
import movieDog from "public/images/logo-moviedog.png";
import jojiju from "public/images/logo-jojiju.png";
import Card from "@/components/Card";
import ProjectContent from "containers/Modals/ProjectContent";
import { projectModalContent } from "pages/api/data";

function ProjectCards() {
  return (
    <CardList>
      <Card
        imgSrc={jojiju.src}
        title="jojiju"
        BGcolor="#fff3e3"
        textColor="#222"
      >
        <ProjectContent content={projectModalContent.jojiju} />
      </Card>
      <Card imgSrc={movieDog.src} title="movieDog" BGcolor="#C58555">
        <ProjectContent content={projectModalContent.movieDog} />
      </Card>
      <Card imgSrc={carZip.src} title="carzip" BGcolor="#3C454C">
        <ProjectContent content={projectModalContent.carZip} />
      </Card>
      <Card imgSrc={taing.src} title="taing" BGcolor="#FF153C">
        <ProjectContent content={projectModalContent.taing} />
      </Card>
    </CardList>
  );
}

export default ProjectCards;

const CardList = styled.div`
  ${({ theme }) => theme.flexWidth[1280]}
  justify-content: flex-start;
  flex-wrap: wrap;
`;
