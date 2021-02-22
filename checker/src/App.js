import React from "react";
import { observer } from "mobx-react";
import Routes from "./Components/Routes/Routes";
import Social from "./Components/Social/Social";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Social />
        </header>
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default observer(App);
