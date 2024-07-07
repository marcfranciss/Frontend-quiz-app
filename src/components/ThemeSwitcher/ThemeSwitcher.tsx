import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./themeswitcher.scss";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
  }
  const iconThemeSwitcher = theme === "light-theme" ? "dark" : "light";
  return (
    <div className='theme-switch-container'>
      <img
        className='switcher-icon'
        src={`/Frontend-quiz-app/src/assets/images/icon-sun-${iconThemeSwitcher}.svg`}
        alt={`Sun icon indicating ${iconThemeSwitcher} mode`}
      />
      <div className='switcher-container'>
        <input
          type='checkbox'
          name='theme-switch'
          id='theme-switch'
          onChange={toggleTheme}
        />
        <label className='switcher-button' htmlFor='theme-switch'></label>
      </div>
      <img
        className='switcher-icon'
        src={`/Frontend-quiz-app/src/assets/images/icon-moon-${iconThemeSwitcher}.svg`}
        alt={`Moon icon indicating ${iconThemeSwitcher} mode`}
      />
    </div>
  );
}

export default ThemeSwitcher;
