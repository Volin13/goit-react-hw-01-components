import PropTypes from 'prop-types';
import Paper from 'components/Paper/Paper';
import css from './FriendsListItem.module.css';
import clsx from 'clsx';

const FriendsListItem = ({ avatar, name, isOnline, variant }) => (
  <Paper>
    <li className={css.item}>
      {isOnline ? (
        <span className={clsx(css.status, css[variant])}></span>
      ) : (
        <span className={clsx(css.status)}></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="60" />
      <p className={css.name}>{name}</p>
    </li>
  </Paper>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsListItem;
