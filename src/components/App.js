import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Contact from "./Contact/Contact";
import DataList from "./Datalist/DataList";
import DataDetails from "./Datalist/DataDetails";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;

    a {
      text-decoration: none;
    }
    
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
          <Route path="/contact" component={Contact} />
          <Route path="/:char_id" component={DataDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
