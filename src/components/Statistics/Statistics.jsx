import React from 'react';
import T from 'prop-types';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic
        label="Positive feedback"
        value={total > 0 ? `${positivePercentage}%` : `0%`}
      />
    </div>
  );
};

Statistics.propTypes = {
  good: T.string.isRequired,
  neutral: T.string.isRequired,
  bad: T.string.isRequired,
  total: T.string.isRequired,
  positivePercentage: T.string.isRequired,
};

export default Statistics;
