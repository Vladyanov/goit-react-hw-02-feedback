import css from './feedback-options.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback('good')} className={css.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={css.btn}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
