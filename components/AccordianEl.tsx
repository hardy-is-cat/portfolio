import { useState } from "react";
import styled from "styled-components";
import IconArrow from "./IconArrow";

type AccodianElTypes = {
  title: string;
  content: string;
};

function AccodianEl({ title, content }: AccodianElTypes) {
  const [isActive, setIsActive] = useState(false);

  const toggleDD = () => setIsActive(!isActive);

  return (
    <>
      <DTBlock isActive={isActive} onClick={toggleDD}>
        {title}
        <IconArrow size={12} direction={isActive ? "up" : "down"} />
      </DTBlock>
      <DDBlock isActive={isActive}>{content}</DDBlock>
    </>
  );
}

export default AccodianEl;

const DTBlock = styled.dt<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.fontSize.headline3};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

const DDBlock = styled.dd<{ isActive: boolean }>`
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-top: none;
  margin-bottom: 8px;
  transform-origin: center top;
  transform: scaleY(0);
  padding-bottom: 0;
  padding-top: 0;
  height: 0;
  ${({ isActive }) =>
    isActive &&
    `
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100%;
  transform: scaleY(100%);
`}
  transition: all 0.3s;
  line-height: 1.5;
`;
