import React, { Component } from 'react';
import Folder from './Folder';
import File from './File';
import Metadata from './Metadata';
import { connect } from 'react-redux';

import { fetchRootResponseData } from '../actions/FileManagerAction';

class FileManager extends Component {

  /*
   * Construct component.
   */
  constructor(props){
    super(props);

    this.state = {
      metadata: null,
      key: 0
    }
  }

  /*
   * Change metadata info.
   */
  changeMetadata = (data, type) => {
    data.type = type
    this.setState({
      metadata : data
    })
  }

  /*
   * Set new state after change name.
   */
  afterChangeName = (data) => {
    this.setState({
      metadata: data,
      key: this.state.key++
    })
  }

  /*
   * Fetch mock data before the component mount.
   */
  componentWillMount() {
    this.props.fetchRootResponseData()
  }

  /*
   * Render component.
   */
  render() {
    return(
      <div key={this.state.key}>
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
        <Metadata data={this.state.metadata} afterChange={this.afterChangeName}/>
      </div>
    )
  }
}

/*
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  folders: state.FileManagerReducer.folders,
  files: state.FileManagerReducer.files
});

/*
 * Map the dispatch methods to props.
 */
const mapDispatchToProps = (dispatch) => ({
  fetchRootResponseData: () => dispatch(fetchRootResponseData())
});


/*
 * Export default & connnect FileManager component to app state.
 */
export default connect(mapStateToProps, mapDispatchToProps)(FileManager);