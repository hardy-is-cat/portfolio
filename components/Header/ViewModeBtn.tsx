import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "stores/atom";
import styled from "styled-components";

function ViewModeBtn() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = (e: MouseEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.id === "개발자" &&
      localStorage.getItem("darkMode") === "1"
    ) {
      return;
    } else if (
      e.currentTarget.id === "일반인" &&
      localStorage.getItem("darkMode") === "0"
    ) {
      return;
    }
    setIsDarkMode(!isDarkMode);
    const isDarkModeToNum = Number(!isDarkMode);
    localStorage.setItem("darkMode", String(isDarkModeToNum));
  };

  return (
    <FieldsetBlock>
      <legend className="a11y-hidden">모드 선택</legend>
      <RadioBlock isDarkMode={isDarkMode}>
        <input
          type="radio"
          id="개발자"
          name="화면모드"
          onClick={toggleDarkMode}
        />
        <label htmlFor="개발자">개발자</label>
      </RadioBlock>
      <RadioBlock isDarkMode={isDarkMode}>
        <input
          type="radio"
          id="일반인"
          name="화면모드"
          onClick={toggleDarkMode}
        />
        <label htmlFor="일반인">일반인</label>
      </RadioBlock>
    </FieldsetBlock>
  );
}

export default ViewModeBtn;

const FieldsetBlock = styled.fieldset`
  display: flex;
  z-index: 101;
`;

const RadioBlock = styled.div<{ isDarkMode: boolean }>`
  input {
    display: none;
  }

  label {
    display: block;
    padding: 12px 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-weight: 700;
    cursor: pointer;
  }

  label[for="개발자"] {
    border-radius: 8px 0 0 8px;
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.primary : "transparent"};
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.bg : theme.colors.text};
  }

  label[for="일반인"] {
    border-radius: 0 8px 8px 0;
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? "transparent" : theme.colors.primary};
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.text : theme.colors.bg};
    border-left: none;
  }
`;
