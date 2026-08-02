import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-full"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;