import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>
          <span className="logo-blue">Free</span>FileConvert
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#converter">Converter</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <button className="theme-btn">
          <FaMoon />
        </button>

      <a href="#converter" className="start-btn">
         Get Started
      </a>

        {/* Mobile Menu Icon */}
        <button className="menu-btn">
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;