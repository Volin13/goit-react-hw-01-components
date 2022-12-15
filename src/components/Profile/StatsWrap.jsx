import css from './Profile.module.css';

const StatsWrap = ({ children, ...otherProps }) => {
  return (
    <div className={css.stats_wrap} {...otherProps}>
      {children}
    </div>
  );
};

export default StatsWrap;
