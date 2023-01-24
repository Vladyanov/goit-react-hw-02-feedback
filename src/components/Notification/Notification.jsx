import css from './notification.module.scss';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className={css.message}>{message}</div>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
