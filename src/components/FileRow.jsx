import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

export default class FileRow extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return(
      <tr>
        <td>10001</td>
        <td>
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text="Hardcode"
            paramName="message"
            change={this.dataChanged}
            className="Inline-edit"
          />
        </td>
        <td>
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text="Hardcode"
            paramName="message2"
            change={this.dataChanged}
            className="Inline-edit"
          />
        </td>
        <td>Tag1, Tag2, Tag3</td>
        <td>Yesterday</td>
        <td>Today</td>
      </tr>
    )
  }
}

