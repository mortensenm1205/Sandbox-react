import { combineReducers } from 'redux';
import { posts } from './posts';
import { selectedFile, quoteFormData } from './quoteData';

export default combineReducers({
  posts,
  selectedFile,
  quoteFormData
});
