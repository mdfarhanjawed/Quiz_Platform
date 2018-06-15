import React from 'react';
import {get_question} from '../actions';
import {action, connect} from 'react-redux';

const question = { marginTop: '50px', border: '1px dotted black', width: '100%', marginLeft: '15px', padding: '10px'}
const button = { marginTop: '20px', border: '1px solid black', marginLeft: '15px', padding: '5px'}
const width_40 = { width: '40%', display: 'inline-block' }

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current_question_index: 0
    };
  }

  componentWillMount(){
    this.props.get_question();
  }

  renderQuestion(item, index){
    return (<div>
      <h4>Question Type:  {item.question_type}</h4>
      <span key="question_number" >Question No: {index + 1}</span>
      <div>{item.question}</div>
      <span key="option">
      {item.option.map((option, index) => (
        <span key={'span' + index}>
                            <input type="radio" id={option} name="random" key={'radio_option' + index}/>
                            <label key={'label_option' + index} key={'label_option' + index} >{option}</label>
                          </span>
      ))}
      </span>
    </div>)
  }

  render(){
    return(
      <div style={width_40}>
        <div style={question}>
          {this.props.questions.map((item, index) => (
               (index == this.state.current_question_index) ? this.renderQuestion(item, index) : ''
          ))}
        </div>
        <div style={question}>
          <span style={button}>Next</span>
          <span style={button}>Prev</span>
          <span style={button}>Mark</span>
          <span style={button}>Submit</span>
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
  })
}

function mapStateToProps(state) {
  return {
    questions: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
