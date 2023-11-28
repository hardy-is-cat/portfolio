import { useRecoilValue } from "recoil";
import { introduceTitleState } from "stores/atom";
import styled, { css } from "styled-components";

const introduceText = [
  {
    id: 1,
    title: "함께 성장하는 것을 제일의 가치로 생각합니다.",
    paragraph: `멋쟁이 사자처럼 프론트엔드스쿨 과정을 거치면서,<br/>
    혼자만 잘 하는 것보다 함께 잘 하는 것이 더욱 단단한 성장의 발판이 된다는 것을 느꼈습니다.<br/>
    멋진 팀원들과 함께 성장해가고 싶습니다.`,
  },
  {
    id: 2,
    title: "웹디자인 업무 경험으로 협업에 강합니다.",
    paragraph: `워드프레스를 이용한 웹사이트 제작 업체에서의 웹디자인 업무 경험이 있습니다.<br/>
    또한 리메인 웹프로페셔널 수강 경험도 있어,<br/>
    웹디자인 시스템에 대한 이해도가 높아 협업에서 원활한 소통을 이룰 수 있습니다.`,
  },
  {
    id: 3,
    title: "사용자의 입장에서 한번 더 생각합니다.",
    paragraph: `웹 서비스들은 회사와 브랜드의 얼굴이라고 생각합니다<br/>
      비대면으로 사용자와 만나는 창구로서,<br/>
      사용자에게 좋은 인상을 남길 수 있는 서비스를 만들고 싶습니다.`,
  },
];

function IntroduceText() {
  const appearIntroduce = useRecoilValue(introduceTitleState);

  return (
    <div>
      {introduceText.map((item) => {
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
`;
