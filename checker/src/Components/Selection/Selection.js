import React, { useState } from "react";
import Info from "../Info/Info";
import axios from "axios";

function Selection(props) {
  const bbEight =
    "https://i.pinimg.com/originals/6c/7d/a9/6c7da91893f7e628807a802ff423cf28.gif";
  const handleGetProject = (event) => {
    Info.project = event.target.value;
  };
  const buttonName = () => {
    axios
      .get(
        `https://intranet.hbtn.io/projects/${Info.project}.json?auth_token=` +
          Info.auth_token,
        {
          ContentType: "application/json",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          Info.tasks = JSON.stringify(response.data.tasks);
          props.history.push("/");
        }
      });
  };
  return (
    <div>
      <img className="bbEight" src={bbEight} alt="" />
      <input
        className="box"
        type="text"
        onChange={handleGetProject}
        placeholder="Type the project number"
      />
      <br />
      <button onClick={buttonName}>Submit</button>
    </div>
  );
}
export default Selection;
