import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

export default class File extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className='App-file-container' onClick={()=>this.props.handleClick(this.props.data, "File")}>
        <div className='App-file Box-shadow'/>
        <div> {this.props.data.name} </div>
      </div>
    )
  }
}

