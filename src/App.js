import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from './containers/header/header';
import Homepage from "../src/pages/homepage/homepage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
