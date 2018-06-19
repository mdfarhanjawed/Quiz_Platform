import React from 'react';
import {get_question, update_response, submit_response} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import Result from './result';
require('../../scss/style.scss');

const question = { marginTop: '50px', border: '1px dotted black', width: '100%', marginLeft: '15px', padding: '10px'}
const button = { cursor: "pointer", marginTop: '20px', border: '1px solid black', marginLeft: '15px', padding: '5px'}
const width_40 = { width: '40%', display: 'inline-grid' }
const question_style = { marginBottom: '20px', marginTop: '10px', fontSize: '14px', color: "blue"}

class Question extends React.Component {
  constructor(props){
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  componentWillMount(){
    this.props.get_question();
  }

  handleOptionChange (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }


  renderQuestion(item, index){
    return (<div>
      <h4>Question Type:  {item.question_type}</h4>
      <span key="question_number" >Question No: {index + 1}</span>
      <div style={question_style}>{item.question}</div>
      <span key="option">
      {item.option.map((option, option_index) => (
        <div key={'span' + option_index}>
          <input  value={option} onClick={(e) => {this.props.update_response(index, e.target.value)}} type="radio" id={option} name="random" key={'radio_option' + index} checked={option == item.response} onChange={this.handleOptionChange} />
          <label key={'label_option' + option_index} key={'label_option' + option_index} >{option}</label>
        </div>
      ))}
      </span>
    </div>)
  }

  render(){
    return(
      <div style={width_40}>
        <div style={question}>
          {this.props.questions.question_details && this.props.questions.question_details.map((item, index) => (
             (index == this.props.current_question_index) ? this.renderQuestion(item, index) : ''
          ))}
        </div>
        <div style={question}>
          <span style={button} className={this.props.current_question_index == 0 ? 'hidden' : ''} onClick={() => {this.props.updateQusIndx(this.props.current_question_index - 1)}}>Prev</span>
          <span style={button} className={(this.props.current_question_index + 1) == (this.props.questions.question_details && this.props.questions.question_details.length) ? 'hidden': ''}  onClick={() => {this.props.updateQusIndx(this.props.current_question_index + 1)}}>Next</span>
          <span style={button} onClick={(e) => {this.props.update_response(this.props.current_question_index)}} >Mark</span>
          <span style={button} className={(this.props.current_question_index + 1) == (this.props.questions.question_details && this.props.questions.question_details.length) ? '': 'hidden'} onClick={(e) => {this.props.submit_response({user_response: this.props.questions.question_details, user_id: localStorage.getItem('user_id') })}} >Submit</span>
          <Link to="/result" style={button}>Results</Link>
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
    update_response: (id, response) => {
      dispatch(update_response(id, response))
    },
    submit_response: (response) => {
      dispatch(submit_response(response))
    }
  })
}

function mapStateToProps(state) {
  return {
    questions: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);

