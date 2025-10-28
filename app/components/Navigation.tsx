'use client';
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-yellow-400 dark:to-orange-400 rounded-full flex items-center justify-center font-bold text-white dark:text-gray-900 shadow-lg group-hover:scale-110 transition-transform">
              I
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white hidden sm:inline">
              Ishara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-purple-600 dark:text-yellow-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 
                       text-purple-600 dark:text-yellow-400 shadow-md hover:scale-110 
                       transition transform duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-700 
                       text-gray-700 dark:text-gray-300 shadow-md hover:scale-110 
                       transition transform duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-purple-600 dark:bg-yellow-400 text-white dark:text-gray-900"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}