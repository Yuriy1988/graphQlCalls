import {
  UPDATE_LANGUAGES_SELECT,
  UPDATE_SELECTED_COUNTRY
} from '../../constants';

/**
 * Update languages select box
 * @param {object} languages
 */
export const updateLanguagesSelect = (languages) => ({
  type: UPDATE_LANGUAGES_SELECT,
  payload: languages
});

export const updateSelectedCountry = (country) => ({
  type: UPDATE_SELECTED_COUNTRY,
  payload: country
});
