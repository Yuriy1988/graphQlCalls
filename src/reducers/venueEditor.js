import {
  UPDATE_LANGUAGES_SELECT
} from '../constants';


/**
 * Initial Venue Editor state
 * @type {object}
 */
const initialState = {
  languages: []
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

    default:
      return state;

  }

}
