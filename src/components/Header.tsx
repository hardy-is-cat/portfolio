import GNB from "./GNB";
import InitTheme from "./InitTheme";
import ToggleThemeBtn from "./ToggleThemeBtn";

function Header() {
  return (
    <header className="fixed h-24 bg-gnb-background p-5 flex justify-between items-center w-screen border-b border-b-gray-200 dark:border-b-0">
      <h1 className="text-2xl tracking-[0.4em]">
        <a href="#main-visual">
          ZU
          <br />
          AL
        </a>
      </h1>
      <InitTheme>
        <ToggleThemeBtn />
      </InitTheme>
      <GNB />
    </header>
  );
}

export default Header;
