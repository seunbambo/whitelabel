import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    value,
    error,
    label,
    required,
  } = props;

  return (
    <>
      <label htmlFor={name} className='app__input-label'>
        {label}
      </label>{' '}
      <br />
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className='app__input'
        onChange={onChange}
        autoComplete='false'
        style={{ border: error ? 'solid 1px red' : '' }}
        required={required}
      />
      {error ? <p style={{ color: 'red', fontSize: '14px' }}>{error}</p> : ''}
    </>
  );
};

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export { FormInput };
