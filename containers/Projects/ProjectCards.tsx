import styled from "styled-components";

import Card from "@/components/Card";

import useScrollFadeIn from "utils/hooks/useScrollFadeIn";

import carZip from "public/images/logo-carzip.png";
import taing from "public/images/logo-taing.png";
import movieDog from "public/images/logo-moviedog.png";

function ProjectCards() {
  return (
    <CardList {...useScrollFadeIn<HTMLDivElement>()}>
      <Card imgSrc={movieDog.src} title="movieDog" BGcolor="#C58555" />
      <Card imgSrc={carZip.src} title="carzip" BGcolor="#3C454C" />
      <Card imgSrc={taing.src} title="taing" BGcolor="#FF153C" />
    </CardList>
  );
}

export default ProjectCards;

const CardList = styled.div`
  ${({ theme }) => theme.width[1280]}
`;
