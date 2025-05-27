import styled from "@emotion/styled";

import Card from "@/components/Card";
import { galleryModalContent } from "pages/api/data";
import GalleryContent from "containers/Modals/GalleryContent";

function GalleryCards() {
  return (
    <CardList>
      <Card
        imgSrc="/images/icon-food.svg"
        imgSize={50}
        title="food"
        BGcolor="#de334f"
      >
        <GalleryContent content={galleryModalContent.food} />
      </Card>
      <Card
        imgSrc="/images/icon-cat.svg"
        imgSize={50}
        title="hardy"
        BGcolor="#3C454C"
      >
        <GalleryContent content={galleryModalContent.hardy} />
      </Card>
      <Card
        imgSrc="/images/icon-woman.svg"
        imgSize={50}
        title="zual"
        BGcolor="#aa40d4"
      >
        <GalleryContent content={galleryModalContent.zual} />
      </Card>
    </CardList>
  );
}

export default GalleryCards;

const CardList = styled.div`
  ${({ theme }) => theme.flexWidth[1280]}
  justify-content: flex-start;
  flex-wrap: wrap;
`;
