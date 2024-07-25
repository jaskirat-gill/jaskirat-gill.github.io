import React from "react";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div id="contact" className="ContactCardContainer">
      <h2>Contact Me</h2>
      <div className="ContactRow">
        <h3>Email:</h3>
        <p>gilljaskirat04@gmail.com</p>
      </div>
      <div className="ContactRow">
        <h3>LinkedIn:</h3>
        <a href="https://www.linkedin.com/in/jaskirat-s-gill/">/in/jaskirat-s-gill</a>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ContactCard;
