import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => {
  return (
    <p>
      {label}:{value}
    </p>
  );
};

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.string.isRequired,
};

export default Statistic;
