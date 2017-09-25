import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import venueEditor from './reducers/venueEditor';

export default combineReducers({
  venueEditor,
  form: formReducer
});
