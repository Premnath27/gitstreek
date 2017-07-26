import React from "react";
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.repos);
    return (
      <div className="repoList">
        {this.props.repos.length === 0 ? <h1>No repos to show</h1> :
        <div>
          <h1>Tracked Repositories: </h1>
          <ul>
            {[].map((repo, idx) => {
              return <li key={idx}><a href="#">{idx+1}. {repo.name}</a></li>
            })}
          </ul>
          <h1>All Repositories: </h1>
          <ul>
            {this.props.repos.map((repo, idx) => {
              return <li key={idx}><a href="#">{idx+1}. {repo.name}</a></li>
            })}
          </ul>
        </div>}
      </div>
    );
  }

}

export default UserInfo;
