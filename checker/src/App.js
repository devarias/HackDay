import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import Routes from "./Components/Routes/Routes";
import Social from "./Components/Social/Social";
import Footer from "./Components/Footer/Footer";
import history from "./Components/History/History";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <Social />
          </header>
          <div className="container">
            <Routes />
          </div>
          <footer className="App-footer">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default observer(App);
