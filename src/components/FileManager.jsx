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

  mockListResources(){
    return {
        "user_id": "12345",
        "user_first_name": "Sexy",
        "user_last_name": "Lexy",
        "folders":
          [
              {
                  "id": "10001",
                  "files_count": 1,
                  "name": "Folder 1",
                  "description": "This folder is awesome!",
                  "created_at": "2017-07-05 09:35:40",
                  "updated_at": "2017-07-05 09:35:40"
              }
          ],
        "documents":
            [
                {
                    "id": "10001",
                    "name": "Document 1",
                    "content": "I am Document 1",
                    "created_at": "2017-07-05 09:35:40",
                    "updated_at": "2017-07-05 09:35:40",
                    "tags": [{ "id": "100001", "name": "tag 1" } ]
                }
            ]
    }
  }

  mockFolderData() {
    return {
      "id": "10001",
      "files_count": 1,
      "name": "Folder 1",
      "description": "This folder is awesome!",
      "created_at": "2017-07-05 09:35:40",
      "updated_at": "2017-07-05 09:35:40",
      "documents":
          [
              {
                  "id": "10001",
                  "name": "Document 1",
                  "content": "I am Document 1",
                  "created_at": "2017-07-05 09:35:40",
                  "updated_at": "2017-07-05 09:35:40",
                  "tags": [{ "id": "100001", "name": "tag 1" } ]

              }
          ]
  }
  }

  mockListResources(){
    return {
        "user_id": "12345",
        "user_first_name": "Sexy",
        "user_last_name": "Lexy",
        "folders":
          [
              {
                  "id": "10001",
                  "files_count": 1,
                  "name": "Folder 1",
                  "description": "This folder is awesome!",
                  "created_at": "2017-07-05 09:35:40",
                  "updated_at": "2017-07-05 09:35:40"
              }
          ],
        "documents":
            [
                {
                    "id": "10001",
                    "name": "Document 1",
                    "content": "I am Document 1",
                    "created_at": "2017-07-05 09:35:40",
                    "updated_at": "2017-07-05 09:35:40",
                    "tags": [{ "id": "100001", "name": "tag 1" } ]
                }
            ]
    }
  }

  get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);


      req.onload = function() {
        if(url.includes('api/list_resources')) {
          resolve(this.mockListResources());
        } else {
          resolve(this.mockFolderData());
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      // Make the request
      req.send();
    });
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