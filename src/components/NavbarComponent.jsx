import React from "react";
import "../index.css";

const NavbarComponent = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="branding">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Logo"
          />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavbarComponent;
