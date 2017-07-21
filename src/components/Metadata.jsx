import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect react component ke action & reducer
import InlineEdit from 'react-edit-inline';

import { updateName } from '../actions/FileManagerAction';
import _ from "lodash"

class Metadata extends Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

  handleChange = (data) => {
    let updatedData = this.props.data.type === "Folder" ? this.props.folders : this.props.files
    let index = _.findIndex(updatedData, {id: this.props.data.id})
    updatedData[index].name = data.name

    this.props.updateName(this.props.type, updatedData)
    this.props.afterChange(updatedData[index])
  }

  render() {
    return (
      <div className='App-metadata Box-shadow'>
        <h4>
          <InlineEdit
            text={_.get(this.props.data, "name", "-")}
            change={this.handleChange}
            paramName="name"
          />
        </h4>
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

// dari state reducer
const mapStateToProps = (state) => ({
  folders: state.FileManagerReducer.folders,
  files: state.FileManagerReducer.files
});

// dari actions, stlh di link jd props
const mapDispatchToProps = (dispatch) => ({
  updateName: (type, updatedData) => dispatch(updateName(type, updatedData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Metadata);