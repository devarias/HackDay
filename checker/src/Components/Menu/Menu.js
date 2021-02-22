import React, { useState } from "react";
import Info from "../Info/Info";
import "../../css/Menu.css";
import axios from "axios";
import Checkers from '../Checkers/Checkers'

function Menu(props) {

  const [displayMenu, setDisplayMenu] = useState(false);
  const onClick = () => setDisplayMenu(!displayMenu);
  let stateMenu = `${displayMenu ? "Hide" : "Show"}`;
  let taskId = "";
  let checker = "";


  const getTasks = () => {
    onClick();
    axios
      .post(
          Info.proxy +
          Info.HolbieUrl +
          "/tasks/" +
          taskId +
          `/start_correction.json?auth_token=` +
          Info.auth_token,
        {
          ContentType: "application/json",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          Info.correctionId = response.data.id;
        }}
      );

  };

  const getId = (event) => {
    taskId = event.target
  }

  const listMenu = JSON.parse(Info.tasks).map((item) => (
    <li key={item.id} className="projects" onClick={getId, getTasks}>
      {item.title}
    </li>
  ));

  if (Info.correctionId !== "") {
    checker = <Checkers />
  }
  console.log(taskId);
  return (
    <>
    <div className="container-menu">
      <span>Project: {Info.projectName}</span>
      <button className="show" onClick={onClick}>
        {stateMenu}
      </button>
      <nav className={`menu ${displayMenu ? "active" : "inactive"}`}>
        <ul>{listMenu}</ul>
      </nav>
    </div>
    <div>
      <ul>{displayMenu && checker ? null : checker}</ul>
    </div>
    </>
  );
}

export default Menu;
