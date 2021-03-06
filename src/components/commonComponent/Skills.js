import React from "react";

const Skills = (props) => {
  return (
    <>
      <div class="col-md-4 skill">
        <div className="skillWrap">
          <div className="skillImage">
            <img src={props.image} alt={props.alt} />
          </div>
          <h4>{props.langauge}</h4>
          <p>{props.experince}</p>
          <p>
            <strong>{props.level}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
