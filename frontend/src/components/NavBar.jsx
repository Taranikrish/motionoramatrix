import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext.jsx";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdmin, logout } = useAdmin();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavigation = (path) => navigate(path);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="bg-transparent flex justify-between items-center p-4 w-full shadow-md absolute z-50">
        <div className="flex-1">
          <img
            src="/mm png.png"
            alt="logo"
            className="h-14 w-28 md:h-20 md:w-40 md:ml-14"
          />
        </div>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="hidden md:flex md:justify-end md:space-x-4 text-white text-lg md:flex-1 mr-8">
          <button
            onClick={() => handleNavigation("/")}
            className="hover:text-gray-400 transition-colors rounded-3xl"
            style={{
              textShadow:
                "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
            }}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className="hover:text-gray-400 transition-colors"
            style={{
              textShadow:
                "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
            }}
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="hover:text-gray-400 transition-colors"
            style={{
              textShadow:
                "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
            }}
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="hover:text-gray-400 transition-colors"
            style={{
              textShadow:
                "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
            }}
          >
            Contact
          </button>
          {isAdmin ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleNavigation("/dashboard")}
                className="hover:text-gray-600 transition-colors"
                style={{
                  textShadow:
                    "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
                }}
              >
                Dashboard
              </button>
              <button
                onClick={async () => {
                  try {
                    await fetch("http://localhost:8000/api/v1/admin/logout", {
                      method: "POST",
                      credentials: "include",
                    });
                  } catch (error) {
                    console.error("Logout error:", error);
                  }
                  logout();
                }}
                className="bg-red-600 hover:bg-red-700 text-ivory-white px-3 py-1 rounded text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavigation("/admin")}
              className="hover:text-gray-600 transition-colors"
              style={{
                textShadow:
                  "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 45px rgba(255,255,255,0.6)",
              }}
            >
              Admin
            </button>
          )}
        </nav>

        {/* ---------- MOBILE NAV TOGGLE BUTTON ---------- */}
        <nav className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-[#e6f7f2] hover:bg-[#74827e] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* ---------- BACKDROP OVERLAY ---------- */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          />
        )}

        {/* ---------- FIXED MOBILE MENU ---------- */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-[#0e1b17] hover:text-[#14b881] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4 p-4">
            {/* Navigation Links */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
            >
              Contact
            </Link>

            {isAdmin ? (
              <div className="flex flex-col space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={async () => {
                    try {
                      await fetch("http://localhost:8000/api/v1/admin/logout", {
                        method: "POST",
                        credentials: "include",
                      });
                    } catch (error) {
                      console.error("Logout error:", error);
                    }
                    logout();
                  }}
                  className="text-left text-red-600 text-lg font-medium hover:text-red-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-[#0e1b17] text-lg font-medium hover:text-[#14b881] transition-colors"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
