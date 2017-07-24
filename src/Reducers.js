import { combineReducers } from 'redux';
import FileManagerReducer from './reducers/FileManagerReducer';

/*
 * Root reducer combines many reducer into single one database.
 * Reference all reducers from here.
 */
const rootReducer = combineReducers({
  FileManagerReducer: FileManagerReducer
});

export default rootReducer;