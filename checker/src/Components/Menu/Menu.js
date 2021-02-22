import React, { useState } from "react";
import Info from "../Info/Info";
import "../../css/Menu.css";
import axios from "axios";

function Menu(props) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const onClick = () => setDisplayMenu(!displayMenu);
  let stateMenu = `${displayMenu ? "Hide" : "Show"}`;

  const getTasks = () => {
    onClick();
    //   axios.get(`https://intranet.hbtn.io/correction_requests/.json?auth_token=`,
    //   {
    //     ContentType: "application/json",
    //   }).then((response) => {
    //     if (response.status === 200) {
    //       Info.checks = JSON.stringify(response.data.result_display.checks);

    //     }}
    //   )
  };

  const listMenu = JSON.parse(Info.tasks).map((item) => (
    <li className="projects" onClick={getTasks}>
      {item.title}
    </li>
  ));
  //const checks = JSON.parse(Info.checks).map(item => <li className={item.passed ? 'passed' : 'failed'}>{item.title}</li>);

  return (
    <div className="container-menu">
      <span>Project tasks</span>
      <button onClick={onClick}>{stateMenu}</button>
      <nav className={`menu ${displayMenu ? "active" : "inactive"}`}>
        <ul>{listMenu}</ul>
      </nav>
      {/* <ul>{checks ? checks : null}</ul> */}
    </div>
  );
}

export default Menu;
