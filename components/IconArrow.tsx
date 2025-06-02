import styled from "@emotion/styled";

type IconArrowTypes = {
  size: number;
  direction?: string;
  color?: string;
  className?: string;
};

function IconArrow({
  size = 20,
  direction = "top",
  color,
  className,
}: IconArrowTypes) {
  const directionToDeg = (calcDirection: string) => {
    switch (calcDirection) {
      case "up":
        return -45 + "deg";
      case "right":
        return 45 + "deg";
      case "down":
        return 135 + "deg";
      case "left":
        return 180 + "deg";
      default:
        break;
    }
  };

  return (
    <IconWrapper
      className={className}
      size={size}
      direction={directionToDeg(direction)}
      color={color}
    >
      <span className="line"></span>
    </IconWrapper>
  );
}

export default IconArrow;

const IconWrapper = styled.div<IconArrowTypes>`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};

  span.line {
    display: block;
    width: ${({ size }) => size + "px"};
    height: ${({ size }) => size + "px"};
    border-top: 2px solid ${({ theme, color }) => color || theme.colors.text};
    border-right: 2px solid ${({ theme, color }) => color || theme.colors.text};
    transform: translateY(0%) ${({ direction }) => `rotate(${direction})`};
    transition: all 0.2s;
  }
`;
