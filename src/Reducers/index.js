import { combineReducers } from 'redux';
import { posts } from './posts';
import { selectedFile, quoteFormData } from './quoteData';
import { applicationFormData } from './applicationData';

export default combineReducers({
  posts,
  selectedFile,
  quoteFormData,
  applicationFormData
});
