import { forwardRef } from "react";
import styled from "@emotion/styled";

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

SectionTitle.displayName = "Section";

export default SectionTitle;

const SectionTitleBlock = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlText};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 100px;
  padding: 0 20px;

  ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: ${({ theme }) => theme.fontSize.headline1};
    margin-bottom: 40px;
  }
`;
