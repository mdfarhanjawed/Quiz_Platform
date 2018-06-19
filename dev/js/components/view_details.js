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
        <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-primary">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-secondary mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-success mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-danger mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-danger">
            <h5 className="card-title">Danger card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-warning mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-warning">
            <h5 className="card-title">Warning card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-info mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-info">
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
          <div className="card-header">Header</div>
          <div className="card-body text-dark">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    result: state
  };
}

export default connect(mapStateToProps)(ViewDetail);