import {
  UPDATE_LANGUAGES_SELECT,
  UPDATE_SELECTED_COUNTRY
} from '../constants';


/**
 * Initial Venue Editor state
 * @type {object}
 */
const initialState = {
  languages: [],
  selectedCountry: {}
};

/**
 * Venue Editor reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default function venueEditor(state = initialState, action) {

  switch(action.type) {

    case UPDATE_LANGUAGES_SELECT:
      return {
        ...state,
        languages: action.payload
      };

    case UPDATE_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload
      };

    default:
      return state;

  }

}
