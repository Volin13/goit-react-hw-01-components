import cn from 'classnames';
import PropTypes from 'prop-types';
import { StyledTable } from './TransactionHistiry.styled';

const TransactionHistory = ({ items }) => (
  <StyledTable>
    <thead>
      <tr className="styledHead">
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className="styledCase" key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};
export default TransactionHistory;
