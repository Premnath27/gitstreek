import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { history } from '../store'

class Submit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false
    }
  }

  componentDidMount(){
    if(this.props.id === "" && this.props.match.params.id === ""){
      history.push('/');
    }
  }

  render() {
    return (
      <div className="home">
        <h1 className="title">Your poll was successfully created!!</h1>
        <CopyToClipboard text={"http://localhost:3000/question/"+this.props.match.params.id} onCopy={() => this.setState({copied: true})}>
          {this.state.copied ? <button className="copyButton">Copied</button> : <button className="copyButton">Copy to clipboard</button>}
        </CopyToClipboard>

        <button className="copyButton"><a className="link" href={"http://localhost:3000/question/"+this.props.match.params.id}>Go To Poll</a></button>

        <button className="copyButton"><Link className="link" to='/'>Create Another Poll</Link></button>


      </div>
    )
  }
}

//The home component needs user
const mapStateToProps = (state) => {
  return {
    options: state.options.options,
    question: state.question.question,
    id: state.question.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
