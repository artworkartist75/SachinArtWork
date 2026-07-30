import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-8 py-2 bg-black border-b border-gray-200 shadow-md">

      {/* Logo */}
      <span className="text-2xl font-extrabold md:text-3xl text-white">
        ArtWork
      </span>

      {/* Nav Links */}
      <div className="flex items-center gap-3 md:gap-6 text-sm md:text-lg font-semibold text-white">

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
      </div>
    </nav>
  );
}

export default Navbar;