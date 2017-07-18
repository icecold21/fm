import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

class FileManager extends Component {
  constructor(props){
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      message: 'ReactInline demo',
      message2: 'ReactInline demo',
    }
  }

  dataChanged(data) {
    // data = { description: "New validated text comes here" }
    // Update your model from here
    console.log(data)
    this.setState({...data})
  }

  customValidateText(text) {
    return (text.length > 0 && text.length < 64);
  }


  render() {
    return(
      <div>
        <div className="table-responsive" >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10001</td>
                <td>
                  <InlineEdit
                    validate={this.customValidateText}
                    activeClassName="editing"
                    text={this.state.message}
                    paramName="message"
                    change={this.dataChanged}
                    className="Inline-edit"
                  />
                </td>
                <td>
                  <InlineEdit
                    validate={this.customValidateText}
                    activeClassName="editing"
                    text={this.state.message2}
                    paramName="message2"
                    change={this.dataChanged}
                    className="Inline-edit"
                  />
                </td>
                <td>Tag1, Tag2, Tag3</td>
                <td>Yesterday</td>
                <td>Today</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FileManager;