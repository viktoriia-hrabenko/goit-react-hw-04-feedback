import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

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
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};