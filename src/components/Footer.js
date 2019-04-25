import React from "react";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.025,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
export default function Footer() {
  return (
    <div className="Footer">
      <div className="textImage">
        <h1>Contacts</h1>
      </div>
      <div className="boxFooter">
        <Box className="myImage" />
        <div className="myContacts">
          <div className="contactInfo">
            <i className="fab fa-github" style={{ marginRight: "1rem" }} />
            https://github.com/Roxolana4lana
          </div>
          <div className="contactInfo">
            <i className="fas fa-envelope" style={{ marginRight: "1rem" }} />
            roxolanapavlyk@gmail.com
          </div>
          <div className="contactInfo">
            <i className="fas fa-phone" style={{ marginRight: "1rem" }} />
            501556168
          </div>
          <div className="contactInfo">
            <i className="fab fa-linkedin" style={{ marginRight: "1rem" }} />
            501556168
          </div>
        </div>
      </div>

      <div className="rights">
        <p>all rights reserved &copy; 2019 | Roksolana Pavlyk</p>
      </div>
    </div>
  );
}
