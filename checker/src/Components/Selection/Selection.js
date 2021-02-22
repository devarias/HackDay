import React, { Component } from "react";
import { observer } from "mobx-react";
import "../../css/Selection.css";
import Social from "../Social/Social";
import Info from "../Info/Info";
import axios from "axios";

class Selection extends Component {
  render() {
    return (
      <Social />
      // <div className="selection">
      //   <input
      //     className="box"
      //     type="text"
      //     // onChange={handleGetProject}
      //     placeholder="Type the project number"
      //   />
      //   <br />
      //   <button>Submit</button>
      // </div>
    );
  }
}
export default observer(Selection);
