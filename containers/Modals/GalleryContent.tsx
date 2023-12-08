import styled from "styled-components";
import Gallery from "@/components/Gallery";
import { GalleryContentTypes } from "pages/api/data.ts";

type ModalContentTypes = {
  content: GalleryContentTypes;
};

function GalleryContent({ content }: ModalContentTypes) {
  const { title, description, picture } = content;
  return (
    <>
      <H3Block>{title}</H3Block>
      <HrBlock />
      <p>
        {description.split("<br/>").map((text, i) => (
          <span key={i}>
            {text}
            <br />
          </span>
        ))}
      </p>
      <HrBlock />
      <Gallery imgData={picture} />
    </>
  );
}

export default GalleryContent;

const HrBlock = styled.hr`
  margin: 20px 0;
  border-color: ${({ theme }) => theme.colors.border};
`;

const H3Block = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
`;
