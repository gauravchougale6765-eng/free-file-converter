import "./Hero.css";

import profile from "../../assets/profile.jpg";

import pdf from "../../assets/pdf.png";
import word from "../../assets/word.png";
import jpg from "../../assets/jpg.png";
import ppt from "../../assets/ppt.png";
import txt from "../../assets/txt.png";

import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-badge">
            👋 Welcome!
          </span>

          <h1>
            Hi, I'm <span>Gaurav Chougale</span>
          </h1>

          <h2>
            Full Stack Developer (Java & Python)
          </h2>

          <p>
            I built this Universal File Converter to make
            file conversion simple, fast and secure for
            everyone.
          </p>

          <div className="hero-social">

            <a
              href="https://www.linkedin.com/in/gourav-chougale-961"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/shivahoilc_gaurav_0113"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://github.com/gauravchougale6765-eng"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

          <a
            href="#converter"
            className="hero-btn"
          >
            Start Converting
            <FaArrowDown />
          </a>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-circle">

            <img
              src={profile}
              alt="Gaurav"
              className="profile-image"
            />

            <img
              src={pdf}
              className="floating pdf"
              alt="pdf"
            />

            <img
              src={word}
              className="floating word"
              alt="word"
            />

            <img
              src={jpg}
              className="floating jpg"
              alt="jpg"
            />

            <img
              src={ppt}
              className="floating ppt"
              alt="ppt"
            />

            <img
              src={txt}
              className="floating txt"
              alt="txt"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;