import React from 'react';
import { Link, Redirect, browserHistory } from 'react-router-dom';
import {action, connect} from 'react-redux';
import {create_user, get_question} from "../actions";

class User extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      username: '',
      redirect_to_new_page: false,
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.create_user({user: { email: this.state.email, username: this.state.username }})
    this.setState({redirect_to_new_page: true})
  }

  render(){
    if (this.state.redirect_to_new_page) {
      return (
        <Redirect to="/question_page"/>
      )
    }
    return(
      <div style={{textAlign: 'center', marginTop: '150px'}}>
        <h3>Personal Information</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" className="inputStyle" onChange={(e) => {this.setState({username: e.target.value})}} />
          <input type="text" placeholder="email" className="inputStyle" required={true} onChange={(e) => {this.setState({email: e.target.value})}} />
          <input type="submit" value="Let's Begin The Quiz" className="submitStyle buttonStyle" />
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return ({
    create_user: (params) => {
      dispatch(create_user(params))
      dispatch(get_question());
    }
  })
}

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
