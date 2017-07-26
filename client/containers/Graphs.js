import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Graphs extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Graphs</h1>
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
      dispatch(push());
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graphs);
