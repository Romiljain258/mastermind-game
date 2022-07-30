import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import ChoiceCard from "./ChoiceCard";
import MainCard from "./MainCard";
import Cong from "../message/Cong";
import Los from "../message/Los";
import Register from "./Register";
import Login from "./Login";
function Frontpage() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={ChoiceCard}/>
      <Route path='/main' exact component={MainCard}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/cong' exact component={Cong}/>
      <Route path='/los' exact component={Los}/>
      </Switch>
    </Router>
  );
};

export default Frontpage;
