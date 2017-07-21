// reducer terima initial state & action, reducer are pure functions

import { FETCH_ROOT_SUCCESS, UPDATE_NAME } from '../actions/FileManagerAction';

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
    case UPDATE_NAME:
      return {
        ...state,
        [action.payload.types] : action.payload.updatedData
      }
    }
  return state;
};

export default FileManagerReducer;