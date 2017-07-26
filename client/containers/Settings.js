import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Settings extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Settings</h1>
        </div>
      </div>
    );
  }
}

//The home component needs user
const mapStateToProps = (state) => {
  return {
    user: state.data.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: () => {
      dispatch(push(''));
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
