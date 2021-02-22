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
    axios
      .post(
        Info.proxy +
          Info.HolbieUrl +
          "/tasks/" +
          Info.project +
          `/start_correction.json?auth_token=` +
          Info.auth_token,
        {
          ContentType: "application/json",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          axios
            .get(
              Info.proxy +
                Info.HolbieUrl +
                "/correction_requests/" +
                response.data.id +
                ".json?auth_token=" +
                Info.auth_token,
              { ContentType: "application/json" }
            )
            .then((res) => {
              console.log(res.data);
              console.log(Info.auth_token);
            });
        }
      });
  };

  const listMenu = JSON.parse(Info.tasks).map((item) => (
    <li key={item.id} className="projects" onClick={getTasks}>
      {item.title}
    </li>
  ));
  // const checks = JSON.parse(Info.checks).map((item) => (
  //   <li className={item.passed ? "passed" : "failed"}>{item.title}</li>
  // ));

  return (
    <div>
      <div className="container-menu">
        <span>Project: {Info.projectName}</span>
        <button className="show" onClick={onClick}>
          {stateMenu}
        </button>
        <nav className={`menu ${displayMenu ? "active" : "inactive"}`}>
          <ul>{listMenu}</ul>
        </nav>
      </div>
      <div className="results">
        <img
          className="checkerima"
          src="https://as01.epimg.net/betech/imagenes/2017/10/10/portada/1507631983_511333_1507632220_noticia_normal.jpg"
        />
      </div>
    </div>
  );
}

export default Menu;
