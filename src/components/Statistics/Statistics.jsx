import PropTypes from 'prop-types';
import cn from 'classnames';
import StyledItem from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <StyledItem className="statistics">
    {title && <h2 className="title">Upload stats</h2>}

    <ul className="stat_list">
      {stats.map(item => (
        <li
          className={cn('item', {
            doc: item.label === '.docx',
            pdf: item.label === '.pdf',
            mp: item.label === '.mp3',
            psd: item.label === '.psd',
          })}
          key={item.id}
        >
          <span className="label">{item.label} </span>
          <span className="percentage">{item.percentage}% </span>
        </li>
      ))}
    </ul>
  </StyledItem>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  lable: PropTypes.string,
  percentage: PropTypes.number,
};
export default Statistics;
