import { useRecoilValue } from "recoil";
import { darkModeState, introduceTitleState } from "stores/atom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { introduceTextDev, introduceTextNormal } from "pages/api/data";

function IntroduceText() {
  const appearIntroduce = useRecoilValue(introduceTitleState);
  const IsDarkMode = useRecoilValue(darkModeState);

  return (
    <div>
      {IsDarkMode
        ? introduceTextDev.map((item) => {
            return (
              <TextWrapper key={item.id} $appearIntroduce={appearIntroduce}>
                <h3>{item.title}</h3>
                <p>
                  {item.paragraph.split("<br/>").map((text, i) => (
                    <span key={i}>
                      {text}
                      <br />
                    </span>
                  ))}
                </p>
              </TextWrapper>
            );
          })
        : introduceTextNormal.map((item) => {
            return (
              <TextWrapper key={item.id} $appearIntroduce={appearIntroduce}>
                <h3>{item.title}</h3>
                <p>
                  {item.paragraph.split("<br/>").map((text, i) => (
                    <span key={i}>
                      {text}
                      <br />
                    </span>
                  ))}
                </p>
              </TextWrapper>
            );
          })}
    </div>
  );
}

export default IntroduceText;

const TextWrapper = styled.div<{ $appearIntroduce: boolean }>`
  margin-bottom: 28px;

  &:last-of-type {
    margin-bottom: 0;
  }

  h3 {
    display: inline-block;
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSize.headline3};
    font-weight: 600;
    line-height: 1.3;
  }

  h3::after {
    display: block;
    content: "";
    width: 0;
    height: 4px;
    margin-top: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $appearIntroduce }) =>
    $appearIntroduce &&
    css`
      h3::after {
        animation: titleBorder 1s normal forwards;
      }

      &:nth-of-type(2) h3::after {
        animation-delay: 1s;
      }

      &:nth-of-type(3) h3::after {
        animation-delay: 2s;
      }

      @keyframes titleBorder {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    `}

  ${({ theme }) => theme.mediaQuery.mobile} {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.headline4};
    }
  }
`;
