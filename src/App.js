import React, { useState, useEffect } from 'react';
import './App.css';
import UserDetail from './UserDetail';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      setUsers(data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <button onClick={() => window.location.reload(false)}>Get Users</button>
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
