import React from "react";
import buttonLogo from "../img/download_FILL0_wght400_GRAD0_opsz48.png";
import img from "../img/grade_FILL0_wght400_GRAD0_opsz48.png";

const AboutComponent = (props) => {
  return (
    <div className="AboutComponent">
      <h1>{props.title}</h1>
      {/* copying from start portfolio component  */}
      <div className="about-line-star">
        <div className="about-line"></div>
        <div className="about-star-logo">
            <img src={img}></img>
        </div>
        <div className="about-line"></div>
      </div>
      <div className="about-content-container">
      <div className="about-left-para">
        <p>{props.leftPara}</p>
      </div>
      <div className="about-right-para">
        <p>{props.rightPara}</p>
      </div>
      </div>
      <button className="about-download-button">
        <img src={buttonLogo} />
        {props.buttonText}
      </button>
    </div>
  );
};

export default AboutComponent;
