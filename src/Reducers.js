// Redux Immutable, need reducer to pesistent layer.
// flow dari action ke persistent layer
// root reducer combines many reducer into single one database,
// table are stored in reducer folder
// semua reducer taruh sini
// action hal yg dilakukan yg menyebabkan perubahaan terhadap data di store


import { combineReducers } from 'redux';
import FileManagerReducer from './reducers/FileManagerReducer';

const rootReducer = combineReducers({
  FileManagerReducer: FileManagerReducer
});

export default rootReducer;