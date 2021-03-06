import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Mypage from "./Pages/Mypage/Mypage";
import Signup from "./Pages/Signup";
import Detail from "./Pages/Detail/Detail";
import SpaceRegistration from "./Pages/SpaceRegistration";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Detail/:name" component={Detail} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Registration" component={SpaceRegistration} />
          <Route exact path="/Mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
