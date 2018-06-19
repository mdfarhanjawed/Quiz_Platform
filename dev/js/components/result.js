import React from 'react';
import {} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <table className="vitamins">
          <thead>
          <tr>
            <th></th>
            <th>Correct Answer</th>
            <th>Wrong Answer</th>
            <th>Total Question</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quantative</td>
              <td>{this.props.result.correct_ans_apt}</td>
              <td>{this.props.result.wrong_ans_apt}</td>
              <td>{this.props.result.tot_apt_que}</td>
            </tr>
            <tr>
              <td>Reasoning</td>
              <td>{this.props.result.correct_ans_reas}</td>
              <td>{this.props.result.wrong_ans_reas}</td>
              <td>{this.props.result.tot_reas_que}</td>
            </tr>
            <tr>
              <td>English</td>
              <td>{this.props.result.correct_ans_eng}</td>
              <td>{this.props.result.wrong_ans_eng}</td>
              <td>{this.props.result.tot_eng_que}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    result: state
  };
}

export default connect(mapStateToProps)(Result);