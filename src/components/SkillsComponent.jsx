import React from "react";
import SkillComponent from "./SkillComponent";

const SkillsComponent = () => {
  return (
    <section id="skills-section">
      <div className="container">
        <div className="skills">
          <h1>These are my favorite technologies</h1>
          <div className="skills-wrapper">
            <SkillComponent image="html_icon.png" name="HTML5" link="https://en.wikipedia.org/wiki/HTML5"/>
            <SkillComponent image="css_icon.png" name="CSS3" link="https://en.wikipedia.org/wiki/CSS"/>
            <SkillComponent image="javascript_icon.png" name="Javascript" link="https://www.javascript.com/"/>
            <SkillComponent image="typescript_icon.png" name="Typescript" link="https://www.typescriptlang.org/"/>
            <SkillComponent image="reactjs_icon.png" name="React" link="https://reactjs.org/"/>
            <SkillComponent image="nodejs_icon.png" name="Node.js" link="https://nodejs.org/en/"/>
            <SkillComponent image="mongodb_icon.png" name="MonogoDB" link="https://www.mongodb.com/"/>
            <SkillComponent image="tailwindcss_icon.png" name="Tailwind CSS" link="https://tailwindcss.com/"/>
            <SkillComponent image="bootstrap_icon.png" name="Bootstrap" link="https://getbootstrap.com/"/>
            <SkillComponent image="git_icon.png" name="Git" link="https://git-scm.com/"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
