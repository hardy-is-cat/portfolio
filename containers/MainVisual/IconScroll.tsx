import styled from "styled-components";

type IconScrollTypes = {
  className?: string;
};

function IconScroll({ className }: IconScrollTypes) {
  return (
    <IconWrapper className={className}>
      <span className="line"></span>
      <span className="line"></span>
    </IconWrapper>
  );
}

export default IconScroll;

const IconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  span.line {
    display: block;
    width: 20px;
    height: 20px;
    border-top: 2px solid ${({ theme }) => theme.colors.text};
    border-right: 2px solid ${({ theme }) => theme.colors.text};
    transform: rotate(135deg);
    animation: scrollmove 2s infinite;
  }

  span.line:last-child {
    margin-top: -8px;
  }

  @keyframes scrollmove {
    0% {
      opacity: 0;
      transform: translateY(-5px) rotate(135deg);
    }

    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 0;
      transform: translateY(5px) rotate(135deg);
    }
  }
`;
