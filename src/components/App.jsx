import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
  ProfileWrap,
  StatisticsWrap,
} from '../components';
import user from '../constants/user.json';
import data from '../constants/data.json';
import friends from '../constants/friends.json';
import transactions from '../constants/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileWrap>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </ProfileWrap>
      <StatisticsWrap>
        <Statistics title="Upload stats" stats={data} type />
      </StatisticsWrap>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
