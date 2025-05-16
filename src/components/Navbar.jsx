import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Update <html> class and localStorage on theme change
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div>
      <nav className="bg-gray-100 dark:bg-gray-900 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            Learn Tailwind
          </div>

          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md bg-white dark:bg-gray-800 dark:text-white"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <button className="bg-blue-500 text-white p-2 rounded-md">Login</button>
            <button className="bg-blue-500 text-white p-2 rounded-md">Sign Up</button>

            {/* 🌙 Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md border border-gray-700 dark:border-white text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
