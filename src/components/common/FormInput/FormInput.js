/* eslint jsx-a11y/label-has-for: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    labelText,
    type,
    placeholder,
    idCore,
    value,
    onChange,
  } = props;

  return (
    <div
      className="input-field"
      id={`${idCore}-input-wrapper`}
    >
      <label htmlFor={`${idCore}-input`} className="active">
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={`${idCore}-input`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  idCore: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  labelText: '',
  type: 'text',
  placeholder: '',
};

export default FormInput;
