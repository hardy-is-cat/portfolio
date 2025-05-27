import Link from "next/link";
import { ReactNode } from "react";
import styled from "@emotion/styled";

type LinkTypes = {
  children: ReactNode;
  href: string;
};

function LinkBtn({ children, href }: LinkTypes) {
  return <LinkBtnBlock href={href}>{children}</LinkBtnBlock>;
}

export default LinkBtn;

const LinkBtnBlock = styled(Link)`
  display: block;
  padding: 12px 20px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
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
