import React from 'react';
import {action} from 'react-redux';

const sidebar = {  width: '30%', height: "500px"}
const width_40 = { width: '40%', display: 'inline-block', marginLeft: '120px'  }

class Sidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={width_40}>
        <div style={sidebar}>Question Details</div>
        <div>Each Question</div>
      </div>
    )
  }
}

export default Sidebar;