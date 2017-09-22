import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import WithLoader from '../../hocs/WithLoader';
import Select from '../Select/index';
import * as venueActions from './venueActions';
import { ALL_COUNTRIES_QUERY } from '../Countries/query';


/**
 * @class
 * Venue Editor Container component
 */
class VenueEditorContainer extends Component {

  /**
   * Define propTypes
   * @returns {object}
   */
  static get propTypes() {
    return {
      data: PropTypes.shape({
        countries: PropTypes.array.isRequired
      }),
      languages: PropTypes.array.isRequired,
      venueActions: PropTypes.shape({
        updateLanguagesSelect: PropTypes.func.isRequired
      })
    }
  }

  /**
   * Update languages select on country change
   * @param {object} countries
   * @param {object} event
   */
  onCountryChange(countries, event) {

    const {venueActions} = this.props;
    const selectedId = parseInt(event.target.value || '');
    const languages = ((countries.filter(country => country.id === selectedId))[0] || {}).languages;

    if(!languages) {
      return;
    }

    venueActions.updateLanguagesSelect(languages);

  }

  /**
   * Render template
   * @returns {XML}
   */
  render() {

    const {
      data: {countries = []},
      languages
    } = this.props;

    return (

      <div className='venue-editor' style={{display: 'flex'}}>

        <Select
          label="Country"
          data={countries}
          onChange={this.onCountryChange.bind(this, countries)}
        />

        <Select
          label="Languages"
          data={languages}
        />

      </div>

    )

  }

}

const mapStateToProps = ({venueEditor}) => ({
  languages: venueEditor.languages
});

const mapDispatchToProps = (dispatch) => ({
  venueActions: bindActionCreators(venueActions, dispatch)
});

export default compose(
  graphql(ALL_COUNTRIES_QUERY),
  WithLoader,
  connect(mapStateToProps, mapDispatchToProps)
)(VenueEditorContainer);
