import React, { Component } from 'react';
import FolderRow from './FolderRow';
import FileRow from './FileRow';

class FileManager extends Component {
  constructor(props){
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      pageData: this.mockListResources(),
      folders: [],
      files: []
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

  // mockListResources(){
  //   return {
  //       "user_id": "12345",
  //       "user_first_name": "Sexy",
  //       "user_last_name": "Lexy",
  //       "folders":
  //         [
  //             {
  //                 "id": "10001",
  //                 "files_count": 1,
  //                 "name": "Folder 1",
  //                 "description": "This folder is awesome!",
  //                 "created_at": "2017-07-05 09:35:40",
  //                 "updated_at": "2017-07-05 09:35:40"
  //             }
  //         ],
  //       "documents":
  //           [
  //               {
  //                   "id": "10001",
  //                   "name": "Document 1",
  //                   "content": "I am Document 1",
  //                   "created_at": "2017-07-05 09:35:40",
  //                   "updated_at": "2017-07-05 09:35:40",
  //                   "tags": [{ "id": "100001", "name": "tag 1" } ]
  //               }
  //           ]
  //   }
  // }

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
    new Promise(function(resolve, reject) {
      // A mock async action using setTimeout
      setTimeout(function() { resolve({
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
        }); }, 3000);
    })
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
              <FileRow />
              <FileRow />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FileManager;