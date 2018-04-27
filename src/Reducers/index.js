import { combineReducers } from 'redux';
import { posts } from './posts';
import { selectedFile } from './fileUpload';

export default combineReducers({
  posts,
  selectedFile
});
