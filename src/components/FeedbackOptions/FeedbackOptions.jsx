import React from 'react';
import T from 'prop-types';
import Button from '../Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <>
      {keys.map(key => (
        <Button name={key} handleClick={onLeaveFeedback} key={key} />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: T.shape({
    good: T.number.isRequired,
    neutral: T.number.isRequired,
    bad: T.number.isRequired,
  }).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
