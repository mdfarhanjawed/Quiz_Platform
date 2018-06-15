import React from 'react';
import {action, connect} from 'react-redux';

const sidebar = {  width: '30%', height: "500px"}
const width_40 = { width: '40%', display: 'inline-grid', marginLeft: '120px'  }

class Sidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={width_40}>Total Question
        <div style={{border: '1px solid green', height: '150px', width: '500px',padding: '40px' }}>
          {this.props.questions.map((question, index) => (
            <span className='boxDesign' key={'box'+ index} onClick={() => {this.props.updateQusIndx(index)}}>{index + 1}</span>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state
  };
}
export default connect(mapStateToProps)(Sidebar);
