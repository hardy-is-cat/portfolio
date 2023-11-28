import styled from "styled-components";

function Title({ children }: React.PropsWithChildren) {
  return <TitleBlock>{children}</TitleBlock>;
}

export default Title;

const TitleBlock = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlText};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 100px;
`;
