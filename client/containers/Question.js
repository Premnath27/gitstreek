import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import { getQuestion } from "../actions/questionActions";
import { votedOption } from "../actions/votedActions";

import Vote from "../components/Question/vote";
import Results from "../components/Question/results"

class Question extends React.Component {
  constructor(props){
    super(props);
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount(){
    // console.log(this.props.match.params.id); //The id from url, use redux to fetch question from databse
    this.props.getQuestion(this.props.match.params.id);
  }

  selectOption(idx){
    this.props.votedOption(this.props.answerChoices,idx,this.props.match.params.id);
  }

  //this.props.question
  //this.props.answerChoices (before voting)
  //this.props.stats (after voting)
  // <img style={{backgroundColor: "white"}} height="96" alt={(idx+1)+". "+option.value} onClick={this.selectOption.bind(this,idx)}></img>


  render() {
    return (
      <div className="home">
        {this.props.stats.length === 0 ? <Vote question={this.props.question} choices={this.props.answerChoices} selectOption={this.selectOption.bind(this)} /> : <Results question={this.props.question} choices={this.props.stats} />}
      </div>
    );

  }
}

//The home component needs user
const mapStateToProps = (state) => {
  return {
    options: state.options.options,
    question: state.question.question,
    id: state.question.id,
    answerChoices: state.question.answerChoices,
    voted: state.votes.voted,
    stats: state.votes.stats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestion: (id) => {
      dispatch(getQuestion(id));
    },
    votedOption: (choices,idx,id) => {
      dispatch(votedOption(choices,idx,id));
    }
  };
};

// return (
//   <div>
//     <div className="jumbotron" style={{'textAlign': 'center'}}>
//       <h2>{this.props.question}</h2>
//       <h4>Click an option to vote!</h4>
//       <br />
//
//
//       {this.props.stats.length === 0 ? <div className="row">
//         {this.props.answerChoices.map((option,idx) => {
//           return (<div>
//             <div className="col-xs-offset-3 col-xs-2">
//               <img style={{backgroundColor: "white"}} height="96" alt={(idx+1)+". "+option.value} onClick={this.selectOption.bind(this,idx)}></img>
//             </div>
//           </div>);
//         })}
//       </div> : <div className="row">
//         {this.props.stats.map((option,idx) => {
//           return (<div>
//             <div className="col-xs-offset-3 col-xs-2">
//               <img style={{backgroundColor: "white"}} height="96" alt={(idx+1)+". "+option.value + "(" + option.votes + ")"}></img>
//             </div>
//           </div>);
//         })}
//       </div>}
//
//
//     </div>
//   </div>
// );
export default connect(mapStateToProps, mapDispatchToProps)(Question);
