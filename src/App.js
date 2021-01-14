import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import Homepage from "../src/pages/homepage/homepage";
import Gist from '../src/pages/gist/gist';
import JoinUs from '../src/pages/join-us/join-us';

function App(props) {
  
  return (
    <div className='App'>
      <Router>
        <Header /> 
        <Switch>
          <Route path='/'  component={Homepage} />
          <Route path='/gist'  component={Gist} />
          <Route path='/be-stingy'  component={JoinUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
