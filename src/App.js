import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./containers/header/header";
import Footer from "./containers/footer/footer";
import Homepage from "../src/pages/homepage/homepage";
import Gist from "../src/pages/gist/gist";
import JoinUs from "../src/pages/join-us/join-us";
import CreateId from "../src/pages/create-id/create-id";
import Rules from "../src/pages/rules/rules";
import WriteRules from "./containers/write/write-rules";
import WriteGist from "./containers/write/write-gist";
import ProfilePage from "../src/containers/profile/profile";
import ResetPassword from "../src/components/reset-password/reset-password";
import InputEmail from '../src/containers/input-email/input-email'
import Error from '../src/pages/error/error';
import {
  transitions,
  types,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 9000,
  offset: "30px",
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.FADE,
};
function App(props) {
  return (
    <div className='App'>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/gist' component={Gist} />
            <Route path='/join' component={JoinUs} />
            <Route path='/create' component={CreateId} />
            <Route path='/rules-and-regulation' component={Rules} />
            <Route path='/write-rules' exact component={WriteRules} />
            <Route path='/write-gist' exact component={WriteGist} />
            <Route path='/profile' exact component={ProfilePage} />
            <Route path='/password-reset' exact component={ResetPassword} />
            <Route path='/input-email' exact component={InputEmail} />
            <Route path='*' exact component={Error} />
          </Switch>
          <Footer />
        </Router>
      </AlertProvider>
    </div>
  );
}

export default App;
