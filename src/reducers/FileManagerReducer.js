// reducer terima initial state & action, reducer are pure functions

import { FETCH_ROOT_SUCCESS } from '../actions/FileManagerAction';

const initialState = {
  rootData: {}
};

const FileManagerReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ROOT_SUCCESS:
      return {
        ...state,
        rootData: action.payload
      }
  }
  return state;
};

export default FileManagerReducer;