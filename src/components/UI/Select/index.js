import React from 'react';
import PropTypes from 'prop-types';


/**
 * Select box UI component
 * @param {object} props
 * @constructor
 */
const Select = props => (
  
  <div className='ui-select-box' style={{padding: '20px 0'}}>
    {props.label && <label>{props.label}:</label>}
    <select onChange={props.onChange} style={{minWidth: '100px'}}>
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
