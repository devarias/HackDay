import React, { useState } from "react";
import Info from "../Info/Info";
import axios from "axios";

function Selection(props) {
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
          props.history.push("/checker");
        }
      });
  };
  return (
    <div>
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
