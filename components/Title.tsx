import { RefObject, forwardRef } from "react";
import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  return (
    <TitleBlock {...props} ref={ref}>
      {props.children}
    </TitleBlock>
  );
});

export default Title;

const TitleBlock = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlText};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 100px 0;
`;
