import React from 'react';
import QuestionPage from './root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
require('../../scss/style.scss');

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <QuestionPage />
      </div>
    )
  }
}

export default(App);


