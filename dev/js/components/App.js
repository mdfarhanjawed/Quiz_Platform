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
    this.state = {
      add_todo_text: ""
    };
  }

  // componentWillMount(){
  //   console.log(this.props.get_question);
  //   this.props.get_question();
  // }

  render() {
    console.log(this.props.list)
    return (
      <div>
        <Navbar />
        <Question />
        <Sidebar />
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


