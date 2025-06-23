import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Student Portal
          </span>
        </div>
        {/* Links */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 ${
                isActive ? "font-bold text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 ${
                isActive ? "font-bold text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-700 ${
                isActive ? "font-bold text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Dashboard
          </NavLink>
          {user && (
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            title="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          {user && (
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
              {user.name || "Student"}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
