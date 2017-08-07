import React from "react";
import { Link } from 'react-router-dom';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalVotes: 0
    }
  }

  componentDidMount(){
    var votes = 0;
    for(var i = 0; i < this.props.choices.length; i++){
      votes += parseInt(this.props.choices[i].votes);
    }
    this.setState({
      totalVotes:votes
    });
  }

  render() {
    return (
      <span>
        <h1 className="title">Snap Poll</h1>
        <div className="displayQuestion">{this.props.question}</div>
        {this.props.choices.map((option,idx) => {
          return (<div className="displayStats">
            {String.fromCharCode(65 + idx) +". "+option.value+" ("+option.votes+")(" + ((option.votes/this.state.totalVotes)*100).toFixed(2)+"%)"}
          </div>);
        })}
        <button className="copyButton"><Link className="link" to='/'>Create Another Poll</Link></button>
      </span>
    );
  }

}

export default Results;
