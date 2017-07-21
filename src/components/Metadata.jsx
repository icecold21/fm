import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect react component ke action & reducer

import _ from "lodash"

class Metadata extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='App-metadata Box-shadow'>
        <h4>{_.get(this.props.data, "name", "-")}</h4>
        <table>
          <tr>
            <td>ID</td>
            <td>{_.get(this.props.data, "id", "-")}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{_.get(this.props.data, "type", "-")}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{_.get(this.props.data, "description", "-")}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>{_.get(this.props.data, "created_at", "-")}</td>
          </tr>
          <tr>
            <td>Updated At</td>
            <td>{_.get(this.props.data, "updated_at", "-")}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Metadata;