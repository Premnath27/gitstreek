import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import NavbarLoggedOut from "../components/Navbar/loggedOut.js";
import NavbarLoggedIn from "../components/Navbar/loggedIn.js";
import { getUser } from "../actions/userActions";
import { getRepos } from "../actions/userActions";

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser();
    this.props.getRepos();
  }

  render() {
    return (
      <div className="sticky">
        {!!this.props.user.id ?
          <nav className="topnav sticky">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/graphs">Graphs</Link></li>
              <li><Link to="/"><img src="../../images/Octocat.png"/></Link></li>
              <li><Link to="/repos">Repos</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>
           :<NavbarLoggedOut/>}
      </div>
    );
  }
}

//The home component needs user
const mapStateToProps = (state) => {
  return {
    user: state.data.user,
    repos: state.data.repos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: () => {
      dispatch(push());
    },
    getUser: () => {
      dispatch(getUser());
    },
    getRepos: () => {
      dispatch(getRepos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
