import React from "react";
import {connect} from "react-redux";
import { Route, Link } from 'react-router-dom';

import Home from "./Home";
import Navbar from "./Navbar";
import Submit from "./Submit";
import Question from "./Question"

export default class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/success/:id" component={Submit} />
        <Route exact path="/question/:id" component={Question} />
      </div>
    );
  }
};
