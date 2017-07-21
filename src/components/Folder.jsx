import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

export default class Folder extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className='App-folder-container' onClick={()=>this.props.handleClick(this.props.data, "Folder")}>
        <div className='App-folder Box-shadow'/>
        <div> {this.props.data.name} </div>
      </div>
    )
  }
}

