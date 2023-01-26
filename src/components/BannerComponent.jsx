import React from "react";
import "../index.css";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BannerComponent = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="firstSection">
          <div className="text">
            <p>Hello! &#128075;&#127996;</p>
            <div className="words">
              <div className="word">
                <span>I</span>
                <span>'</span>
                <span>m</span>
              </div>
              <div className="word">
                <span>L</span>
                <span>e</span>
                <span>o</span>
              </div>
            </div>
            <p>Web Developer from Romania</p>
          </div>
          <div className="contact">
            <p><a href="#contact-section">Find me here</a></p>
            <div>
              <a href="https://www.facebook.com/leo.stefan.iliescu">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/in/iliescu-stefan-leonard-95b935208/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/leostefan27">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="secondSection">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/me_image.png`}
            alt="Me"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
