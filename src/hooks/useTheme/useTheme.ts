import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<any>(localStorage.theme);
  const colorTheme: any = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
