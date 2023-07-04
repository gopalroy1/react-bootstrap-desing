import React from "react";
import img from "../img/grade_FILL0_wght400_GRAD0_opsz48.png";

const StartBootStrap = () => {
  return (
    <div className="StartBootStrap">
      <div className="start-boot-container">
        <img
          id="start-img"
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
        />
        <h1>START BOOTSTRAP</h1>
        <div className="line-star">
          <div className="line"></div>
          <div>
            <img src={img}></img>
          </div>
          <div className="line"></div>
          
        </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
};

export default StartBootStrap;
