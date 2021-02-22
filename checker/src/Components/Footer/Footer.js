import React, { Component } from "react";
const footerIcon = "https://i.imgur.com/TUdHBzr.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer">
          Made by valentina Jaramillo, Ricardo Arquimedes and David Arias -
          Colombia 2021 <br></br> May the 4th be with you
        </p>
        <img className="footerIcon" src={footerIcon} alt="" />
      </div>
    );
  }
}
export default Footer;
