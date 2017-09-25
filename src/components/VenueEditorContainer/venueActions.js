import {
  UPDATE_LANGUAGES_SELECT
} from '../../constants';

/**
 * Update languages select box
 * @param {object} languages
 */
export const updateLanguagesSelect = (languages) => ({
  type: UPDATE_LANGUAGES_SELECT,
  payload: languages
});
