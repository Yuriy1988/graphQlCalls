import React from 'react';
import PropTypes from 'prop-types';


/**
 * Input UI component
 * @param {object} props
 * @constructor
 */
const Input = props => (

  <div className="oc-textfield">
    {props.label && <label
      className="oc-label"
      htmlFor={props.name}>
      {props.label}:
    </label>}
    <input
      className="oc-textfield__input"
      id={props.name}
      type={props.type || 'text'}
      name={props.name}
      value={props.value || ''}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
  
);

/**
 * Define propTypes
 * @type {object}
 */
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
