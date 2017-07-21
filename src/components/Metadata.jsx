import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect react component ke action & reducer

class Metadata extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='App-metadata Box-shadow'>
        <h4>Folder Name</h4>
        <table>
          <tr>
            <td>ID</td>
            <td>10001</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Folder</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>This folder is awesome!</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>2017-07-05 09:35:40</td>
          </tr>
          <tr>
            <td>Updated At</td>
            <td>2017-07-05 09:35:40</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Metadata;