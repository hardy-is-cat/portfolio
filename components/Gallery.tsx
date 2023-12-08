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
    return fileName.split("-")[1].split(".")[0];
  };

  const fileName = convertAltMessage(imgData[0]);

  return (
    <div>
      <CurrentImgWrapper>
        <Image src={mainImg} fill alt={`${fileName}의 이미지`} />
      </CurrentImgWrapper>
      <ThumList>
        {imgData.map((imgsrc, i) => {
          return (
            <ThumItem onClick={() => setMainImg(imgsrc)}>
              <Image src={imgsrc} fill alt={`${fileName}의 ${i}번째 이미지`} />
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

  ${({ theme }) => theme.media.mobile} {
    height: 200px;
  }

  ${({ theme }) => theme.media.tablet} {
    height: 260px;
  }

  img {
    object-fit: contain;
    transition: all 0.3s;
  }
`;

const ThumList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const ThumItem = styled.li`
  position: relative;
  min-width: calc((100% - 10px * 3) / 4);
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile} {
    height: 60px;
    min-width: calc((100% - 10px * 1) / 2);
  }

  ${({ theme }) => theme.media.tablet} {
    height: 80px;
    min-width: calc((100% - 10px * 1) / 2);
  }

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
