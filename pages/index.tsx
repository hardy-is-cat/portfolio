import styled from "styled-components";
import NextIcon from "/public/images/next.svg";

export default function Home() {
  return (
    <>
      <h1>해위</h1>
      <p>배위</p>
      <NextIconBlock />
    </>
  );
}

const NextIconBlock = styled(NextIcon)`
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
