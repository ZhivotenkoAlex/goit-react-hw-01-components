import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';


// import './App.css';

function App() {
  return (
    
    <div>
      <div>
        <h1>FriendList</h1>
      <FriendsList friends={friends} />
      </div>

        <div>
        <h1>Social-profile</h1>
        <Profile 
          name={ user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <h1>Statistics</h1>
      <Statistics statistics={statisticalData} />
      </div>

      <div>
        <h1>Transactions history</h1>
      <TransactionHistory items={transactions} />
      </div>
    </div>
    
  
  );
}



export default App;
