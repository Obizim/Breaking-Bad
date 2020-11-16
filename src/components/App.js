import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import DataList from "./Datalist/DataList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    
  }
`;

// Learning React Hooks
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <NavBar />
        <Switch>
        <Route path="/" exact component={DataList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
