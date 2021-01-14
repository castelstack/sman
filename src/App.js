import React from "react";

import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import "./App.css";
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import Homepage from "../src/pages/homepage/homepage";
import Gist from '../src/pages/gist/gist';
import JoinUs from '../src/pages/join-us/join-us';

function App() {
  let { url } = useRouteMatch('/be-stingy');
  return (
    <div className='App'>
      <Router>{
        (url === '/be-stingy') ? '' :
        <Header /> }
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/gist'  component={Gist} />
          <Route path='/be-stingy'  component={JoinUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
