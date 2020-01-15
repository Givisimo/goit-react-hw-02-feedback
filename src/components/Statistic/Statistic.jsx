import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => (
  <p>
    {label}:{value}
  </p>
);

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.oneOfType([T.string, T.number]).isRequired,
};

export default Statistic;
