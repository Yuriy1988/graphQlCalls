import React from 'react';
import PropTypes from 'prop-types';


/**
 * Button UI component
 * @param {object} props
 * @constructor
 */
const Button = props => (
  
  <button onClick={props.onClick}>
    {props.text}
  </button>
  
);

/**
 * Define propTypes
 * @type {object}
 */
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;