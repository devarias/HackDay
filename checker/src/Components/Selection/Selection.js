import React, { useState } from "react";
import { observer } from "mobx-react";
import Info from "../Info/Info";
import axios from "axios";

function Selection() {
  const [projectNumber, setProjectNumber] = useState(0);
  const [tasks, setTasks] = useState(0);

  const handleGetProject = (event) => {
    setProjectNumber(event.target.val);
  };
  const data = {
    tasks: tasks,
  };
  const buttonName = () => {
    axios
      .get(
        `https://intranet.hbtn.io/projects/${projectNumber}.json?auth_token=` +
          Info.auth_token,
        data,
        {
          Accept: "application/json",
          ContentType: "application/json",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
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
