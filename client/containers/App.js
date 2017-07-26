import React from "react";
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import { Route, Link } from 'react-router-dom';
import { getUser } from "../actions/userActions";

import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Graphs from "./Graphs";
import Repos from "./Repos";
import Settings from "./Settings";

export default class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/graphs" component={Graphs} />
        <Route path="/repos" component={Repos} />
        <Route path="/settings" component={Settings} />
      </div>
    );
  }
};

//The home component needs user
// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: () => {
//       dispatch(getUser());
//     }
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
