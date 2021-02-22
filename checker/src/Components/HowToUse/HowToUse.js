import React, { useState } from "react";
import "../../css/HowToUse.css";

function HowToUse(props) {
  const onclick = () => {
    props.history.push("/login");
  };

  return (
    <div className="instructions">
      <div className="title">How to use</div>

      <ol>
        <li>
          Fill the Login section with your holberton school email, password, api
          key, and click on the submit button.
        </li>
        <li>
          Type down the number of the project that you want to check and click
          on the submit button.
        </li>
        <li>
          Click in the show button to display all the tasks from the project.
        </li>
        <li>Click in the name of the task to see the checkers from it!</li>
      </ol>
      <button onClick={onclick}>Continue</button>
    </div>
  );
}

export default HowToUse;
