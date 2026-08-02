import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-8 py-2 border-b shadow-md transition-colors duration-300 ${
        isDark
          ? "bg-black text-white border-gray-800"
          : "bg-white text-black border-gray-200"
      }`}
    >
      {/* Logo */}
      <span className={`text-2xl font-extrabold md:text-3xl ${isDark ? "text-white" : "text-black"}`}>
        ArtWork
      </span>

      {/* Nav Links */}
      <div className={`flex items-center gap-3 md:gap-6 text-sm md:text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "text-orange-500" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "text-orange-500" : ""
            }`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "text-orange-500" : ""
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "text-orange-500" : ""
            }`
          }
        >
          Contact
        </NavLink>
        
        <span className="flex items-center text-sm md:text-lg font-semibold text-black dark:text-white">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition hover:scale-110 ${
              isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </span>
      </div>
      {/* <ThemeToggle /> */}
    </nav>
  );
}

export default Navbar;