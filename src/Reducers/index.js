import { combineReducers } from 'redux';
import { posts } from './posts';
import { quoteFormData } from './quoteData';
import { applicationFormData } from './applicationData';
import { images } from './imgData';

export default combineReducers({
  posts,
  quoteFormData,
  applicationFormData,
  images
});
