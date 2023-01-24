import css from './section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div className={css.block}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
