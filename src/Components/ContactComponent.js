import React from "react";
import img from "../img/grade_FILL0_wght400_GRAD0_opsz48.png";

const ContactContainer = () => {
  return (
    <div className="ContactContainer">
      <h1>CONTACT ME</h1>
      <div className="port-line-star">
        <div className="port-line"></div>
        <div>
          <img src={img}></img>
        </div>
        <div className="port-line"></div>
      </div>
      <div className="contact-input-container">
        <label>Full Name</label>
        <input></input>
        <label>Email Address</label>
        <input></input>
        <label>Phone number</label>
        <input></input>
        <label>Message</label>
        <input id="message-input"></input>
      </div>
      <button></button>
    </div>
  );
};

export default ContactContainer;
