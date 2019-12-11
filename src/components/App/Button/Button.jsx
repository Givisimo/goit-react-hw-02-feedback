import React from 'react';
import T from 'prop-types';

const Button = ({ choiceText, choiceClick }) => {
  return (
    <button onClick={choiceClick} type="button" name={choiceText}>
      {choiceText}
    </button>
  );
};

Button.propTypes = {
  choiceText: T.string.isRequired,
  choiceClick: T.func.isRequired,
};

export default Button;
