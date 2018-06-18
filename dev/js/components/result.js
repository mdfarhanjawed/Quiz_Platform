import React from 'react';
import {} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(result);
    return(
      <div>
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