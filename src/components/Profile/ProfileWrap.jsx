import css from './Profile.module.css';

const ProfileWrap = ({ children }) => {
  return <div className={css.main_wrap}>{children}</div>;
};

export default ProfileWrap;
