import React from 'react';
import PropTypes from 'prop-types';


/**
 * Input UI component
 * @param {object} props
 * @constructor
 */
const Input = props => (
  
  <input
    type={props.type || 'text'}
    name={props.name}
    value={props.value || ''}
    onChange={props.onChange}
  />
  
);

/**
 * Define propTypes
 * @type {object}
 */
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
