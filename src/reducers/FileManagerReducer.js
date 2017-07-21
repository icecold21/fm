// reducer terima initial state & action, reducer are pure functions

import { FETCH_ROOT_SUCCESS } from '../actions/FileManagerAction';

const initialState = {
  files: [],
  folders: []
};

const FileManagerReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ROOT_SUCCESS:
      return {
        ...state,
        files: action.payload.documents,
        folders: action.payload.folders
      }
  }
  return state;
};

export default FileManagerReducer;