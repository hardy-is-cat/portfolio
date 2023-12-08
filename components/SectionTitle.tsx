import { forwardRef } from "react";
import styled from "styled-components";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (props, ref) => {
    return (
      <SectionTitleBlock {...props} ref={ref}>
        {props.children}
      </SectionTitleBlock>
    );
  }
);

export default SectionTitle;

const SectionTitleBlock = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlText};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 100px;

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.headline1};
    margin-bottom: 40px;
  }
`;
