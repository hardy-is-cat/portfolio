import styled from "styled-components";

import Card from "@/components/Card";
import FoodModal from "containers/Modals/FoodModal";
import HardyModal from "containers/Modals/HardyModal";
import ZualModal from "containers/Modals/ZualModal";

function GalleryCards() {
  return (
    <CardList>
      <Card
        imgSrc="/images/icon-food.svg"
        imgSize={50}
        title="food"
        BGcolor="#de334f"
      >
        <FoodModal />
      </Card>
      <Card
        imgSrc="/images/icon-cat.svg"
        imgSize={50}
        title="hardy"
        BGcolor="#3C454C"
      >
        <HardyModal />
      </Card>
      <Card
        imgSrc="/images/icon-woman.svg"
        imgSize={50}
        title="zual"
        BGcolor="#aa40d4"
      >
        <ZualModal />
      </Card>
    </CardList>
  );
}

export default GalleryCards;

const CardList = styled.div`
  ${({ theme }) => theme.width[1280]}
`;
