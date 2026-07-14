import "./Hero.css";
import heroImg from "../../assets/hero.png";
import pdfIcon from "../../assets/pdf.png";
import wordIcon from "../../assets/word.png";
import jpgIcon from "../../assets/jpg.png";
import pptIcon from "../../assets/ppt.png";
import txtIcon from "../../assets/txt.png";

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">

        <span className="welcome">
          👋 Welcome to FreeFileConvert
        </span>

        <h1>
          Hi, I'm <span>Gourav Chougale</span>
        </h1>

        <h2>
          Full Stack Developer (Java & Python)
        </h2>

        <p>
          A modern, fast and secure Universal File Converter that helps
          users convert files in seconds without complicated software.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#converter" className="hero-btn">
  Start Converting
  <FaArrowRight />
</a>

<a href="#features" className="secondary-btn">
  Learn More
</a>
        </div>

        {/* Social */}

        <div className="social-links">

          

  <a

    href="https://www.linkedin.com/in/gourav-chougale-961"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="LinkedIn"

  >

    <FaLinkedin />

  </a>



  <a

    href="https://www.instagram.com/shivahoilc_gaurav_0113"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="Instagram"

  >

    <FaInstagram />

  </a>



  <a

    href="https://github.com/gauravchougale6765-eng"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="GitHub"

  >

    <FaGithub />

  </a>
        </div>
      </div>

      {/* Right Side */}

      <div className="hero-right">

        <div className="image-container">

          {/* Orbit Ring */}
          <div className="orbit-ring"></div>

          <img
            src={heroImg}
            alt="Profile"
            className="hero-image"
          />

          <img src={pdfIcon} alt="PDF" className="pdf-icon floating" />
          <img src={wordIcon} alt="Word" className="word-icon floating" />
          <img src={jpgIcon} alt="JPG" className="jpg-icon floating" />
          <img src={pptIcon} alt="PPT" className="ppt-icon floating" />
          <img src={txtIcon} alt="TXT" className="txt-icon floating" />

        </div>

      </div>

    </section>
  );
}

export default Hero;