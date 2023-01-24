import css from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p name={good} className={css.text}>
        Good: {good}
      </p>
      <p name={neutral} className={css.text}>
        Neutral: {neutral}{' '}
      </p>
      <p name={bad} className={css.text}>
        Bad: {bad}
      </p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
