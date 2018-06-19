import React from 'react';
import {view_details} from '../actions';
import {action, connect} from 'react-redux';
import { Link, Redirect, browserHistory } from 'react-router-dom';

class ViewDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
    hello      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    result: state
  };
}

export default connect(mapStateToProps)(ViewDetail);