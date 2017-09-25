import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import WithLoader from '../../hocs/WithLoader';

import Select from '../UI/Select/index';
import Button from '../UI/Button/index';
import Input from '../UI/Input/index';

import * as venueActions from './venueActions';

import {
  ALL_COUNTRIES_QUERY
} from './queries/coutries';
import {
  CREATE_COUNTRY_MUTATION,
  UPDATE_COUNTRY_MUTATION,
  DELETE_COUNTRY_MUTATION
} from './mutations/coutries';


/**
 * @class
 * Venue Editor Container component
 */
class VenueEditorContainer extends Component {

  /**
   * Local state for new country name
   * @type {object}
   */
  state = {
    newCountryName: ''
  };

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
   * Set active country when component is loaded
   */
  componentDidMount() {
    this.updateFirstSelectedCountry();
  }

  /**
   * Save new country name value
   * @param {object} event
   */
  saveNewCountryNameValue(event) {

    this.setState({
      newCountryName: event.target.value
    });

  }

  /**
   * Set first available country as active
   */
  updateFirstSelectedCountry() {

    const {venueActions, data: {countries}} = this.props;
    const firstCountry = countries && countries[0];

    if(typeof firstCountry !== 'object') {
      return;
    }

    venueActions.updateSelectedCountry(firstCountry);

  }

  /**
   * Update languages select on country change
   * @param {object} countries
   * @param {object} event
   */
  onCountryChange(countries, event) {

    const {venueActions} = this.props;
    const selectedId = parseInt(event.target.value || '', 10);
    const activeCountry = ((countries.filter(country => country.id === selectedId))[0] || {});
    const activeLanguages = activeCountry.languages || [];

    venueActions.updateSelectedCountry(activeCountry);
    venueActions.updateLanguagesSelect(activeLanguages);

  }

  /**
   * Create new country on button click
   */
  onCreateCountryClick() {

    const {createCountry} = this.props;

    createCountry({
      variables: {
        countryDef: {
          name: this.state.newCountryName || 'New Country',
          languages: [
            1, 2
          ]
        }
      },

      // update: (proxy, {data}) => {
      //
      //   console.log(proxy);
      //
      //   const cache = proxy.readQuery({query: ALL_COUNTRIES_QUERY});
      //
      //   cache.countries.push(data.createContact);
      //   proxy.writeQuery({
      //     query: ALL_COUNTRIES_QUERY,
      //     data: cache
      //   });
      //
      // },

      refetchQueries: [{
        query: ALL_COUNTRIES_QUERY
      }]
    });

    // Reset country input
    this.setState({
      newCountryName: ''
    });

  }

  /**
   * Update selected country on button click
   */
  onUpdateCountryClick() {

    const {updateCountry, selectedCountry: {id, name}} = this.props;

    if(typeof id !== 'number' || typeof name !== 'string') {
      return;
    }

    const rawName = name.replace(/\(.*?\)/i, '');
    const creationDate = (new Date()).toString().match(/\d+:\d+:\d+/i);

    updateCountry({
      variables: {
        id,
        countryDef: {
          name: `${rawName} (Updated at ${creationDate})`
        }
      },
      refetchQueries: [{
        query: ALL_COUNTRIES_QUERY
      }]
    });

  }

  /**
   * Delete selected country on button click
   */
  onDeleteCountryClick() {

    const {deleteCountry,  selectedCountry: {id}} = this.props;

    if(typeof id !== 'number') {
      return;
    }

    deleteCountry({
      variables: {
        id
      },
      refetchQueries: [{
        query: ALL_COUNTRIES_QUERY
      }]
    }).then(() => {
      this.updateFirstSelectedCountry();
    });

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

      <div className='venue-editor'>

        <Select
          label="Country"
          data={countries}
          onChange={this.onCountryChange.bind(this, countries)}
        />

        <div>
          <p style={{margin: '0 0 10px 0'}}>Manage countries:</p>
          <Input
            type="text"
            name="country-name"
            value={this.state.newCountryName}
            onChange={this.saveNewCountryNameValue.bind(this)}/>
          <Button
            text="Create New Country"
            onClick={this.onCreateCountryClick.bind(this)}>
          </Button>

          <Button
            text="Update Country"
            onClick={this.onUpdateCountryClick.bind(this)}>
          </Button>

          <Button
            text="Delete Country"
            onClick={this.onDeleteCountryClick.bind(this)}>
          </Button>
        </div>

        <Select
          label="Language IDs"
          data={languages}
        />

      </div>

    )

  }

}

const mapStateToProps = ({venueEditor}) => ({
  languages: venueEditor.languages,
  selectedCountry: venueEditor.selectedCountry
});

const mapDispatchToProps = (dispatch) => ({
  venueActions: bindActionCreators(venueActions, dispatch)
});

export default compose(
  graphql(ALL_COUNTRIES_QUERY),
  graphql(CREATE_COUNTRY_MUTATION, {name: 'createCountry'}),
  graphql(UPDATE_COUNTRY_MUTATION, {name: 'updateCountry'}),
  graphql(DELETE_COUNTRY_MUTATION, {name: 'deleteCountry'}),
  WithLoader,
  connect(mapStateToProps, mapDispatchToProps)
)(VenueEditorContainer);
