import React from 'react';
import T from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button onClick={handleClick} type="button" name={name}>
    {name}
  </button>
);

Button.propTypes = {
  name: T.string.isRequired,
  handleClick: T.func.isRequired,
};

export default Button;
