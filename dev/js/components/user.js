import React from 'react';
import { Link } from 'react-router-dom';
import {action, connect} from 'react-redux';

const sidebar = {  width: '30%', height: "500px"}
const width_40 = { width: '40%', display: 'inline-grid', marginLeft: '120px'  }

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{textAlign: 'center', marginTop: '150px'}}>
        <h3>Personal Information</h3>
        <input type="text" placeholder="username" className="inputStyle" />
        <input type="text" placeholder="email" className="inputStyle" required={true} />
        <div style={{marginTop: '20px'}}><Link className="buttonStyle" to="/question_page">Let's Begin The Quiz</Link></div>
      </div>
    )
  }
}

export default (User);
