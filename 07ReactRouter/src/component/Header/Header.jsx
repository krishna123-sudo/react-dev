import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Navigation Bar */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-all duration-300">
              <span className="text-blue-600 animate-blink mr-2">Krishna</span>
              <span className="text-blue-600 animate-blink">Sekhar</span>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links Section (Mobile/Tablet) */}
          <div className={`lg:flex w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {['/', '/about', '/contact', '/github', '/skill'].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-300 border-b border-transparent ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-gray-100 lg:hover:scale-105 lg:transition-all lg:duration-300 lg:p-0`
                    }
                  >
                    {getLinkName(path)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Keyframe Animation for Blinking Effect */}
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }

          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </header>
  );
}

// Helper function to return link names based on path
function getLinkName(path) {
  switch (path) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';
    case '/contact':
      return 'Contact';
    case '/github':
      return 'GitHub';
    case '/skill':
      return 'Skill';
    default:
      return '';
  }
}

export default Header;
