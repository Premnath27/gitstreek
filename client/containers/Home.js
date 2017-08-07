import React from "react";
import { connect } from "react-redux";
import { handleChange } from "../actions/optionsActions";
import { questionChange, createQuestion } from "../actions/questionActions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.questionChange = this.questionChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
  }

  handleChange(e){
    this.props.handleChange(e.target.value,e.target.name);
  }

  questionChange(e){
    this.props.questionChange(e.target.value);
  }

  createQuestion(e){
    e.preventDefault();

    if(this.props.question !== "" && this.props.options.length >= 3){
      this.props.createQuestion(this.props.question, this.props.options);
    }
  }

  render() {
    return (
      <div className="home">
        <h1 className="title">Create a poll</h1>
        <form onSubmit={this.createQuestion}>
            <textarea className="question" type="text" placeholder="Type Question Here..." value={this.props.question} onChange={this.questionChange} />
            <div >
            {this.props.options.map((option,idx) => {
              return <input className="input" type="text" placeholder={"Option "+(idx+1)} name={idx} value={option.value} onChange={this.handleChange}/>
            })}
            </div>
          {this.props.question !== "" && this.props.options.length >= 3 ? <input className="submit" style={{backgroundColor: "#17d346"}} type="submit" value="Create Poll" /> : <input className="submit" type="submit" value="Create Poll" /> }
        </form>
      </div>
    );
  }
}

//My colors {blue: #00faff , green: #17d346, yellow: #f6ff00}

//The home component needs user
const mapStateToProps = (state) => {
  return {
    options: state.options.options,
    question: state.question.question
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (value,idx) => {
      dispatch(handleChange(value,idx));
    },
    questionChange: (question) => {
      dispatch(questionChange(question));
    },
    createQuestion: (question,options) => {
      dispatch(createQuestion(question,options));
    },
    // changePage: (url) => {
    //   dispatch(push(url));
    // }
  };
};

// <form onSubmit={this.createQuestion}>
//     <textarea className="question" type="text" placeholder="Type Question Here" value={this.props.question} onChange={this.questionChange} />
//     {this.props.options.map((option,idx) => {
//       return <input type="text" placeholder={"Option "+(idx+1)} name={idx} value={option.value} onChange={this.handleChange}/>
//     })}
//   <input type="submit" value="Submit" />
// </form>

export default connect(mapStateToProps, mapDispatchToProps)(Home);
