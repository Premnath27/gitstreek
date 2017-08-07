import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        YEEEHAAAW
      </div>
    )
  }
}

//The home component needs user
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
