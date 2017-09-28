import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * WithLoader HOC
 * @param {object} BaseComponent
 * @return {object}
 */
const WithLoader = BaseComponent => {

  /**
   * @class
   * Localized Component
   */
  class ComponentWithLoader extends Component {

    static get propTypes() {
      return {
        data: PropTypes.shape({
          loading: PropTypes.bool.isRequired,
          errors: PropTypes.array,
          error: PropTypes.object
        })
      }
    }

    render() {

      const {data: {
        loading = false,
        errors = [],
        error}
      } = this.props;

      if(loading) {
        return <div>Loading...</div>;
      }

      if(error || errors.length) {
        return <div>Error</div>;
      }

      return <BaseComponent{...this.props} />;

    }

  }

  return ComponentWithLoader;

};

export default WithLoader;
