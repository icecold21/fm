import React, { Component } from 'react';

class FileManager extends Component {
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
                <td>Document 1</td>
                <td>This document is awesome</td>
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