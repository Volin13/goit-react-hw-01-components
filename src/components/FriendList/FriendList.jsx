import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';
const FriendsList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(friend => (
      <FriendsListItem variant="isOnline" key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendsListItem.propTypes = {
  id: PropTypes.number,
};
export default FriendsList;

// avatar={friends.avatar} name={friends.name} isOnline={friends.isOnline}
