import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

const TextArea = (props) => {
  const { id, name, placeholder, onChange, value, error, label } = props;

  return (
    <>
      <label htmlFor={name} className='app__textarea-label'>
        {label}
      </label>{' '}
      <br />
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className='app__textarea'
        onChange={onChange}
        autoComplete='false'
        style={{ border: error ? 'solid 1px red' : '' }}
      />
      {error ? <p style={{ color: 'red', fontSize: '14px' }}>{error}</p> : ''}
    </>
  );
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export { TextArea };
