import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import { FaSearchPlus } from "react-icons/fa";

type GalleryTypes = {
  imgData: string[];
};

function Gallery({ imgData }: GalleryTypes) {
  const [mainImg, setMainImg] = useState(imgData[0]);

  const convertAltMessage = (fileName: string): string => {
    return fileName.split("screenshot-")[1].split("-")[0];
  };

  const projectName = convertAltMessage(imgData[0]);

  return (
    <div>
      <CurrentImgWrapper>
        <Image src={mainImg} fill alt={`${projectName}의 스크린샷`} />
      </CurrentImgWrapper>
      <ThumList>
        {imgData.map((imgsrc, i) => {
          return (
            <ThumItem onClick={() => setMainImg(imgsrc)}>
              <Image
                src={imgsrc}
                fill
                alt={`${projectName}의 ${i}번째 스크린샷`}
              />
              <FaSearchPlus className="icon-search-plus" size={36} />
            </ThumItem>
          );
        })}
      </ThumList>
    </div>
  );
}

export default Gallery;

const CurrentImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s;

  img {
    object-fit: contain;
    transition: all 0.3s;
  }
`;

const ThumList = styled.ul`
  display: flex;
  gap: 10px;
`;

const ThumItem = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  img {
    object-fit: cover;
  }

  &:hover {
    transition: all 0.2s;

    img {
      opacity: 0.2;
    }

    .icon-search-plus {
      opacity: 1;
    }
  }

  .icon-search-plus {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s;

    path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;
