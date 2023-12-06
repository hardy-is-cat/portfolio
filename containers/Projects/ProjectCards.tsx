import styled from "styled-components";

import Card from "@/components/Card";
import MovieDogModal from "containers/Modals/MovieDogModal";

import carZip from "public/images/logo-carzip.png";
import taing from "public/images/logo-taing.png";
import movieDog from "public/images/logo-moviedog.png";
import CarZipModal from "containers/Modals/CarZipModal";
import TaingModal from "containers/Modals/TaingModal";

function ProjectCards() {
  return (
    <CardList>
      <Card imgSrc={movieDog.src} title="movieDog" BGcolor="#C58555">
        <MovieDogModal />
      </Card>
      <Card imgSrc={carZip.src} title="carzip" BGcolor="#3C454C">
        <CarZipModal />
      </Card>
      <Card imgSrc={taing.src} title="taing" BGcolor="#FF153C">
        <TaingModal />
      </Card>
    </CardList>
  );
}

export default ProjectCards;

const CardList = styled.div`
  ${({ theme }) => theme.width[1280]}
`;
