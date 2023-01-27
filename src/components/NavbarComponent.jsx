import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  useEffect(() => {
    window.innerWidth < 900 ? setSmallScreen(true) : setSmallScreen(false);
  }, []);
  window.addEventListener("resize", () => {
    window.innerWidth < 900 ? setSmallScreen(true) : setSmallScreen(false);
  });

  return (
    <section className="navbar">
      <div className="container">
        <div className="branding">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />
        </div>

        {smallScreen ? (
          <div className="smallNavbar">
            <FontAwesomeIcon
              className="toggleNavbar"
              icon={faBars}
              onClick={toggleNavbar}
            />

            {showNavbar && (
              <div onMouseLeave={() => setShowNavbar(false)}>
                <ul>
                  <a href="#">
                    <li>Home</li>
                  </a>

                  <a href="#about-section">
                    <li>About Me</li>
                  </a>

                  <a href="#skills-section">
                    <li>Skills</li>
                  </a>

                  <a href="#contact-section">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about-section">About Me</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default NavbarComponent;
