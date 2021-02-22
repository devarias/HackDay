import React, { Component } from "react";
const footerIcon = "https://i.imgur.com/TUdHBzr.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          Made by valentina Jaramillo, Ricardo Arquimedes and David Arias - Colombia <br></br>
          May the Force be with you
          
      </div>
      
        <img className="footerIcon" src={footerIcon} alt="" />
      </div>
    );
  }
}
export default Footer;
