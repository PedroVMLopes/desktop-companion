import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs"; // Importando os ícones

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "customTheme");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Salva a escolha do usuário
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={() => setTheme(theme === "customTheme" ? "coffee" : "customTheme")}
        checked={theme === "coffee"}
      />
      <BsSunFill className="swap-on w-5 h-5 text-yellow-500" />
      <BsMoonFill className="swap-off w-5 h-5 text-blue-300" />
    </label>
  );
};
