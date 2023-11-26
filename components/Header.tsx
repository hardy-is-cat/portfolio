import { useRecoilState } from "recoil";
import { darkModeState } from "stores/atom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const isDarkModeToNum = Number(!isDarkMode);
    localStorage.setItem("darkMode", String(isDarkModeToNum));
  };

  return (
    <header>
      <p>헤더입니다</p>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "라이트모드" : "다크모드"}
      </button>
    </header>
  );
}

export default Header;
