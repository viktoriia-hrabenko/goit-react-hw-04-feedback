import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return (
            <div className={css.Statistics}>
                <span className={css.Statistics__item}>Good: {good}</span>
                <span className={css.Statistics__item}>Neutral: {neutral}</span>
                <span className={css.Statistics__item}>Bad: {bad}</span>
                <span className={css.Statistics__item}>Total: {total}</span>
                <span className={css.Statistics__item}>Positive feedback: {positivePercentage}%</span>
            </div>
        )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};