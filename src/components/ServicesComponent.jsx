import React from "react";

const ServicesComponent = () => {
  return (
    <section id="services-section">
      <div className="container">
        <div className="services">
          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/assets/images/web_design_illustration.png`} alt="" />
            <p>WEB DESIGN</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/assets/images/back_end_illustration.png`} alt="" />
            <p>BACK END</p>
          </div>

          <div className="service">
            <img src={`${process.env.PUBLIC_URL}/assets/images/digital_marketing_illustration.png`} alt="" />
            <p>DIGITAL MARKETING</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
