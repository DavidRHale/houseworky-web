import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    labelText,
    type,
    placeholder,
    idCore,
  } = props;

  return (
    <div
      className="input-field"
      id={`${idCore}-input-wrapper`}
    >
      <label htmlFor={`${idCore}-input`} className="active">
        {labelText}
        <input
          type={type}
          placeholder={placeholder}
          id={`${idCore}-input`}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  idCore: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  labelText: '',
  type: 'text',
  placeholder: '',
};

export default FormInput;
