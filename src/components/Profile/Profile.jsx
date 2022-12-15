import PropTypes from 'prop-types';
import css from './Profile.module.css';
import StatsWrap from './StatsWrap';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profiles}>
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <StatsWrap>
        <li>
          <span className={css.label}>Followers:</span>
          <span className={css.quantity}> {followers}</span>
        </li>{' '}
      </StatsWrap>
      <StatsWrap>
        {' '}
        <li>
          <span className={css.label}>Views:</span>
          <span className={css.quantity}> {views}</span>
        </li>
      </StatsWrap>
      <StatsWrap>
        {' '}
        <li>
          <span className={css.label}>Likes:</span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </StatsWrap>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
