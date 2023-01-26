import React from "react";

const SkillComponent = (props) => {
  return (
    <div className="skill">
      <a href={props.link} target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`}
          alt=""
        />
        <span>{props.name}</span>
      </a>
    </div>
  );
};

export default SkillComponent;
