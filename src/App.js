import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import Homepage from "../src/pages/homepage/homepage";
import Gist from '../src/pages/gist/gist';
import JoinUs from '../src/pages/join-us/join-us';
import CreateId from "../src/pages/create-id/create-id";
import Rules from "../src/pages/rules/rules";
import WriteRules from "./containers/write/write-rules"
function App(props) {
  
  return (
    <div className='App'>
      <Router>
        <Header /> 
        <Switch>
          <Route path='/'  exact component={Homepage} />
          <Route path='/gist'  component={Gist} />
          <Route path='/be-stingy' component={JoinUs} />
          <Route path='/create'  component={CreateId} />
          <Route path='/rules-and-regulation' component={Rules} />
          
        <Route path='/write-rules' exact component={WriteRules} />
      
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
