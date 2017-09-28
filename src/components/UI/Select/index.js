import React from 'react';
import PropTypes from 'prop-types';


/**
 * Select box UI component
 * @param {object} props
 * @constructor
 */
const Select = props => (
  
  <div className="oc-select">
    {props.label && <label
      className="oc-label">
      {props.label}:
    </label>}
    <select
      className="oc-select__select"
      onChange={props.onChange}>
      {props.data.map(country =>
        country && <option
          key={country.id}
          value={country.id}>
          {country.name || country.id}
        </option>
      )}
    </select>
  </div>
  
);

/**
 * Define propTypes
 * @type {object}
 */
Select.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default Select;
