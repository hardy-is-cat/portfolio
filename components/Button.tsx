import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

type ButtonTypes = {
  children: ReactNode;
  width?: number;
  onClick?: MouseEventHandler;
};

function Button({ width = 100, children, onClick }: ButtonTypes) {
  return (
    <ButtonBlock $width={width} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}

export default Button;

const ButtonBlock = styled.button<{ $width: number }>`
  display: inline-block;
  width: ${({ $width }) => $width + "%"};
  padding: 8px 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.headline5};
  cursor: pointer;
  transition:
    color 0.3s,
    box-shadow 0.3s,
    border 0.6s,
    transform 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.bg};
    box-shadow: inset 0 -3em 0 0 ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.96);
  }
`;
