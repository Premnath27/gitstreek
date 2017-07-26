import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRepos } from "../actions/userActions";
import ListRepos from "../components/Repos/repos"

class Repos extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="home">
        <ListRepos repos={this.props.repos}/>
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
    getRepos: () => {
      dispatch(getRepos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
