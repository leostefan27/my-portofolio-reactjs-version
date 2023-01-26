import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer-section">
      <div className="container">
        <div className="footer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />
          <div className="data">
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>leostefan1227@gmail.com</span>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>0766283521</span>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy;{year} All Rights Reserved To Leo Stefan</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
