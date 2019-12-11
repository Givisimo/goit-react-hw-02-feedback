import React from 'react';
import T from 'prop-types';
import Button from '../App/Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <>
      {keys.map(key => (
        <Button choiceText={key} choiceClick={onLeaveFeedback} key={key} />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: T.shape({
    good: T.string.isRequired,
    neutral: T.string.isRequired,
    bad: T.string.isRequired,
  }).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
