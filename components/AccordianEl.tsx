import { useState } from "react";
import styled from "styled-components";
import IconArrow from "./IconArrow";

type AccodianElTypes = {
  title: string;
  content: string;
};

function AccodianEl({ title, content }: AccodianElTypes) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <DTBlock isActive={isActive} onClick={() => setIsActive(!isActive)}>
        {title}
        <IconArrow size={12} direction={isActive ? "up" : "down"} />
      </DTBlock>
      <DDWrapper isActive={isActive}>
        <DDBlock isActive={isActive}>{content}</DDBlock>
      </DDWrapper>
    </>
  );
}

export default AccodianEl;

const DTBlock = styled.dt<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-bottom: ${({ isActive }) => isActive && "none"};
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
  font-weight: 700;
  cursor: pointer;
`;

const DDWrapper = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (isActive ? "100%" : "0")};
  margin-bottom: 8px;
  overflow: hidden;
  transition: all 0.3s;
`;

const DDBlock = styled.dd<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  padding: ${({ isActive }) => (isActive ? "20px" : "0")};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-top: none;
  transition:
    padding-top 0.3s,
    padding-bottom 0.3s,
    border 0.3s;
  line-height: 1.5;
`;
