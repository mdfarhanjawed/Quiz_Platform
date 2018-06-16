import React from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import Question from './question';
import Sidebar from './sidebar';
import { } from '../actions';
require('../../scss/style.scss');

class App extends React.Component {
  constructor(props){
    super(props);
    this.updateCurrentQuestionIndex = this.updateCurrentQuestionIndex.bind(this);
    this.state = {
      current_question_index: 0,
      question_type: this.props.question,
    };
  }

  updateCurrentQuestionIndex(index){
    this.setState({current_question_index: index})
  }


  // componentWillMount(){
  //   console.log(this.props.get_question);
  //   this.props.get_question();
  // }

  render() {
    console.log(this.state.question_type)
    return (
      <div>
        <Navbar {...this.state} updateQusIndx = {this.updateCurrentQuestionIndex} />
        <Question {...this.state} updateQusIndx = {this.updateCurrentQuestionIndex} />
        <Sidebar {...this.state} updateQusIndx = {this.updateCurrentQuestionIndex} />
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
    question: state
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


