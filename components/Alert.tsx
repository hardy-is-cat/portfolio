import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface AlertProps {
  type: "success" | "fail";
  message: string;
  showAlert: boolean;
}

// 부모요소 transform때문에 fixed 안 먹혀서 보류
function Alert({ type, message, showAlert }: AlertProps) {
  return (
    <AlertBlock $type={type} $showAlert={showAlert}>
      {message}
    </AlertBlock>
  );
}

export default Alert;

const AlertBlock = styled.div<{ $type: string; $showAlert: boolean }>`
  position: fixed;
  right: 20px;
  z-index: 50;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${({ $type }) =>
    $type === "success" ? "#19a55a" : "#e35353"};

  opacity: 0;
  bottom: -10px;
  transition: all 0.3s;

  ${({ $showAlert }) =>
    $showAlert &&
    css`
      opacity: 1;
      bottom: 20px;
    `}
`;
