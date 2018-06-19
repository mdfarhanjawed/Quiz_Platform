import React from 'react';
import {get_result, view_details} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.get_result({user_id: localStorage.getItem('user_id')})
  }

  render(){
    return(
      <div>
        <h3 style={{ textAlign: 'center', color: 'chocolate'}}>Congratulation! <strong style={{color: 'darkorchid'}}>{this.props.result.name}</strong></h3>
        <table className="vitamins">
          <thead>
          <tr>
            <th></th>
            <th>Correct Answer</th>
            <th>Wrong Answer</th>
            <th>Total Question</th>
            <th>View Details</th>
            <th></th>
          </tr>
          </thead>
          <tfoot>
          <tr>
            <td colSpan="4">
              <p><strong>Result has been sent to your email <u>{this.props.result.email}</u></strong></p>
            </td>
          </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Quantative</td>
              <td>{this.props.result.correct_ans_apt}</td>
              <td>{this.props.result.wrong_ans_apt}</td>
              <td>{this.props.result.tot_apt_que}</td>
              <td><Link to="/view_details" onClick={(e) => { this.props.view_details({user_id: localStorage.getItem('user_id'), question_type: "QUANTATIVE"})}}>View Details</Link>  </td>
            </tr>
            <tr>
              <td>Reasoning</td>
              <td>{this.props.result.correct_ans_reas}</td>
              <td>{this.props.result.wrong_ans_reas}</td>
              <td>{this.props.result.tot_reas_que}</td>
              <td><Link to="/view_details" onClick={(e) => { this.props.view_details({user_id: localStorage.getItem('user_id'), question_type: "REASONING"})}}>View Details</Link></td>
            </tr>
            <tr>
              <td>English</td>
              <td>{this.props.result.correct_ans_eng}</td>
              <td>{this.props.result.wrong_ans_eng}</td>
              <td>{this.props.result.tot_eng_que}</td>
              <td><Link to="/view_details" onClick={(e) => { this.props.view_details({user_id: localStorage.getItem('user_id'), question_type: "ENGLISH"})}}>View Details</Link></td>
            </tr>
          </tbody>
        </table>

        <Link style={{width: '120px'}} to='/' className="submitStyle buttonStyle" >Let's Start Again</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    get_result: (user_id) => {
      dispatch(get_result(user_id))
    },
    view_details: (params) => {
      dispatch(view_details(params))
    },
  })
}


function mapStateToProps(state) {
  return {
    result: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);