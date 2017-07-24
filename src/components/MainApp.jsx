import React, { Component } from 'react';
import Header from './Header.jsx';
import FileManager from './FileManager.jsx';


/*
 * Main entry of the app.
 */
class MainApp extends Component {
  render() {
    return(
      <div>
        <Header />
        <FileManager />
      </div>
    )
  }
}

export default MainApp;