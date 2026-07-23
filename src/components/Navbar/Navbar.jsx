import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-container">

        {/* Logo */}

        <a href="#home" className="logo">
          Free<span>FileConverter</span>
        </a>

        {/* Navigation */}

        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#converter" onClick={closeMenu}>
            Converter
          </a>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Right Side */}

        <div className="navbar-right">

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a href="#converter" className="start-btn">
            Get Started
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;