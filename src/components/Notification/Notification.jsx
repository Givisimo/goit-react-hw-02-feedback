import React from 'react';
import T from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;
