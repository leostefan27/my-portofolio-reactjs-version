import React from "react";
import NavbarComponent from "./components//NavbarComponent";
import AboutComponent from "./components/AboutComponent";
import BannerComponent from "./components/BannerComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import ServicesComponent from "./components/ServicesComponent";
import SkillsComponent from "./components/SkillsComponent";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <ServicesComponent />
      <AboutComponent />
      <SkillsComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default App;
