import React from "react";
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="intro">
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }

}

export default UserInfo;
