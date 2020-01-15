import React from 'react';
import T from 'prop-types';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
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

Statistics.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.string.isRequired,
};

export default Statistics;
