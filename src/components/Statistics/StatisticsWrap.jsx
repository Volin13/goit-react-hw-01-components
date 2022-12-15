import css from './Statistics.module.css';

const StatisticsWrap = ({ children }) => {
  return <div className={css.main_wrap}>{children}</div>;
};

export default StatisticsWrap;
