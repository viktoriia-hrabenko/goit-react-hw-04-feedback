import React from 'react';
import PropTypes from 'prop-types';
import css from "../Section/Section.module.css";

export const Section = ({ title, children }) => {
    return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};