import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./containers/header/header";
import Footer from "./containers/footer/footer";
import HomePage from "../src/pages/homepage/homepage";
import Gist from "../src/pages/gist/gist";
import JoinUs from "../src/pages/join-us/join-us";
import CreateId from "../src/pages/create-id/create-id";
import Rules from "../src/pages/rules/rules";
import WriteRules from "./containers/write/write-rules";
import WriteGist from "./containers/write/write-gist";
import ProfilePage from "../src/containers/profile/profile";
import ResetPassword from "../src/components/reset-password/reset-password";
import InputEmail from "../src/containers/input-email/input-email";
import NewPassword from "../src/components/reset-password/new-password";
import Error from "../src/pages/error/error";
import LoaderBox from "../src/components/Loader/loader";
import EditGist from "../src/containers/write/edit";
import Suggest from "../src/pages/suggest/suggest";
import Donate from "../src/components/button/donate";
import { ToastContainer } from "react-toastify";

function App(props) {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {Loading ? (
        <LoaderBox />
      ) : (
        <Router>
          <Donate />
          <Header />
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/gist" component={Gist} />
            <Route path="/join" component={JoinUs} />
            <Route path="/rules-and-regulation" component={Rules} />
            <Route path="/create" component={CreateId} />
            <Route path="/write-rules" exact component={WriteRules} />
            <Route path="/write-gist" exact component={WriteGist} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/password-reset" exact component={ResetPassword} />
            <Route path="/set-new-password" exact component={NewPassword} />
            <Route path="/input-email" exact component={InputEmail} />
            <Route path="/edit" exact component={EditGist} />
            <Route path="/suggest" exact component={Suggest} />
            <Route path="*" exact component={Error} />
          </Switch>

          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
