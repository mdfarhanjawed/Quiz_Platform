import React from 'react';
import {view_details} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';

class ViewDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  render(){
    return(
      <div>
        <h3 style={{textAlign: 'center'}}>Answer for {this.props.details.question_type}</h3>
        <Link to='/result' style={{width: '160px', left: '18px', marginBottom: '30px'}} className="submitStyle buttonStyle">Back to Result Page</Link>
        {this.props.details.response_details && this.props.details.response_details.map((item, index) => (
          <div className="wrong-answer-border">
            <div className="question">Q{index + 1}. {item.question}</div>
            <div style={{margin: '10px',height: '100px'}}>
              <span key="option">
                {item.option.map((option, option_index) => (
                  <div key={'span' + option_index}>
                  <input  type="radio" value={option} checked={option == item.my_response} />
                  <label key={'label_option' + option_index} key={'label_option' + option_index} >{option}</label>
                  </div>
                  ))}
              </span>
            </div>
            <div className={item.is_response_correct ? 'correct' : 'wrong'}>Correct Answer is: {item.answer}</div>
          </div>
        ))}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    details: state
  };
}

export default connect(mapStateToProps)(ViewDetail);