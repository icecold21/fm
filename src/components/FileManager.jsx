import React, { Component } from 'react';
import Folder from './Folder';
import File from './File';
import Metadata from './Metadata';
import { connect } from 'react-redux'; // connect react component ke action & reducer

import { fetchRootResponseData } from '../actions/FileManagerAction';

class FileManager extends Component {
  constructor(props){
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
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

  componentWillMount() {
    // panggil action disini, sebelum mount- check react lifecycle event
    // jadi immutable
    this.props.fetchRootResponseData()
  }

  render() {
    return(
      <div>
        <div className='File-folder-view'>
          <div>
            <h3>Folders</h3><hr />
            {
              this.props.folders.map((folder,index)=>{
                console.log(folder)
                return(
                  <Folder data={folder}/>
                )
              })
            }

          </div>
          <br />
          <div>
            <h3>Files</h3><hr />
          </div>
        </div>
        <Metadata />
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
  fetchRootResponseData: () => dispatch(fetchRootResponseData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FileManager);