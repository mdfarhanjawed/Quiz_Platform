import React from 'react';
import {get_question, get_reasoning_question, get_english_question} from '../actions';
import {action, connect} from 'react-redux';
// import {} from ../actions;

const navbar_design = { marginLeft: '20px', border: '1px solid black', padding: '5px' }

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <span style={navbar_design} onClick ={(e) => {this.props.get_question()}}>Quantative</span>
          <span style={navbar_design} onClick ={(e) => {this.props.get_reasoning_question()}} >Reasoning</span>
          <span style={navbar_design} onClick ={(e) => {this.props.get_english_question()}}>English</span>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return ({
    get_question: () => {
      dispatch(get_question())
    },
    get_reasoning_question: () => {
      dispatch(get_reasoning_question())
    },
    get_english_question: () => {
      dispatch(get_english_question())
    },
  })
}

function mapStateToProps(state) {
  return {
    questions: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);