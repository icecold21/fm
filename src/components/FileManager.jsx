import React, { Component } from 'react';
import Folder from './Folder';
import File from './File';
import Metadata from './Metadata';
import { connect } from 'react-redux'; // connect react component ke action & reducer

import { fetchRootResponseData } from '../actions/FileManagerAction';

class FileManager extends Component {
  constructor(props){
    super(props);

    this.state = {
      metadata: null
    }
  }

  changeMetadata = (data, type) => {
    data.type = type
    this.setState({
      metadata : data
    })
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
              this.props.folders.map((folder, index)=>{
                return(
                  <Folder data={ folder } handleClick={this.changeMetadata} key={index}/>
                )
              })
            }
          </div>
          <br />
          <div>
            <h3>Files</h3><hr />
            {
              this.props.files.map((file, index)=>{
                return(
                  <File data={ file } handleClick={this.changeMetadata} key={index}/>
                )
              })
            }
          </div>
        </div>
        <Metadata data={this.state.metadata}/>
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