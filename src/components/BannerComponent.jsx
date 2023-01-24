import React from "react";
import "../index.css";
import {
  faFacebook,
  faInstagram,
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
            <p>Find me here</p>
            <div>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="">
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
