import React from 'react';
import T from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired,
};

export default Section;
