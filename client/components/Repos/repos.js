import React from "react";
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(payload){
    this.props.createHook(payload[0], payload[1]);
  }

  render() {
    return (
      <div className="repoList">
        {this.props.repos.length === 0 ? <h1>No repos to show</h1> :
        <div>
          <h1>Tracked Repositories: </h1>
          <ul>
            {[].map((repo, idx) => {
              if(repo.hook.tracked){
                  return <li key={idx}><a href="javascript:void(0)">{idx+1}. {repo.name}</a></li>
              }
              return;
            })}
          </ul>
          <h1>All Repositories: </h1>
          <ul>
            {this.props.repos.map((repo, idx) => {
              if(!repo.hook.tracked){
                  return (<li onClick={this.onClick.bind(this,[repo.owner,repo.name])} key={idx}><a href="javascript:void(0)">{idx+1}. {repo.name}</a></li>);
              }
              return;
            })}
          </ul>
        </div>}
      </div>
    );
  }

}

export default UserInfo;
