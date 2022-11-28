import React, { useState } from "react";
import useTheme from "../../hooks/useTheme/useTheme";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(
    colorTheme === "light" ? true : false
  );

  const handleSwitchTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div>
      <DarkModeToggle isDarkMode={darkMode} onChange={handleSwitchTheme} />
    </div>
  );
};

export default ThemeSwitcher;
