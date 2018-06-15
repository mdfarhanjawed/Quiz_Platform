import React from 'react';
import {connect} from 'react-redux';
// import {} from ../actions;

const navbar_design = { marginLeft: '20px', border: '1px solid black', padding: '5px' }

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <span style={navbar_design} >Quantative</span>
          <span style={navbar_design} >Reasoning</span>
          <span style={navbar_design} >English</span>
        </div>
      </div>
    )
  }
}

export default Navbar;
