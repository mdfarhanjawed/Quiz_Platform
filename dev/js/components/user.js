import React from 'react';
import {action, connect} from 'react-redux';

const sidebar = {  width: '30%', height: "500px"}
const width_40 = { width: '40%', display: 'inline-grid', marginLeft: '120px'  }

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <input type="text" />
        <input type="text" />

      </div>
    )
  }
}

export default (User);
