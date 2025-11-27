import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // ⭐ TOKEN CHECK

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

      <Link to="/">
        <h2 className="text-2xl font-bold">TasteStudio</h2>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">

        {/* ⭐ SHOW ONLY WHEN USER LOGGED IN */}
        {token && (
            <>
            <Link to="/">Home</Link>
            <Link to="/addrecipe">Add Recipe</Link>
            <Link to="/myrecipe">My Recipe</Link>
            <Link to="/viewprofile">View Profile</Link>

            <button
              onClick={handleLogout}
              className="cursor-pointer px-8 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full"
            >
              Logout
            </button>
          </>
        )}

        {/* ⭐ SHOW ONLY WHEN LOGGED OUT */}
        {!token && (
          <>
            <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
              <Link to="/login">Login</Link>
            </button>

            <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-4 px-5 text-sm md:hidden`}
      >

        {/* ⭐ MOBILE MENU — token check */}
        <Link to="/" className="block">Home</Link>
        {token && (
          <>
            <Link to="/addrecipe" className="block">Add Recipe</Link>
            <Link to="/myrecipe" className="block">My Recipe</Link>
            <Link to="/viewprofile" className="block">View Profile</Link>

            <button
              onClick={handleLogout}
              className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          </>
        )}

        {!token && (
          <>
            <Link
              to="/login"
              className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
