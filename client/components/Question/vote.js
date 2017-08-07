import React from "react";
import { Link } from 'react-router-dom';

class Vote extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <span>
        <h1 className="title">Snap Poll</h1>
        <div className="displayQuestion">{this.props.question}</div>
        {this.props.choices.map((option,idx) => {
          return (<div>
            <button className="displayOptions" onClick={this.props.selectOption.bind(this,idx)}> { String.fromCharCode(65 + idx) +". "+option.value} </button>
          </div>);
        })}
      </span>
    );
  }

}

export default Vote;
