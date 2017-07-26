import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Intro from "../components/Home/intro";
import UserInfo from "../components/Home/userInfo"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {!!this.props.user.id ? <UserInfo user={this.props.user}/> : <Intro />}
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
