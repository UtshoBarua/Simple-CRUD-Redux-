import './App.css';
import AddUser from './component/AddUser';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
        <h1>Simple CRUD Project Using Redux</h1>
        <AddUser></AddUser>
        <UserList></UserList>
    </div>
  );
}

export default App;
