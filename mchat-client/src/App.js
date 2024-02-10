import logo from "./logo.svg";

import React, { useState } from 'react';
import './App.css';
import ChatWindow from "./chatwindow/chatwindow";
import UserList from "./userlist/userlist";
const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'Friend 1' },
    { id: 2, name: 'Friend 2' },
    { id: 3, name: 'Friend 3' },
    // Add more users as needed
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <UserList users={users} onUserClick={handleUserClick} />
      {selectedUser && <ChatWindow selectedUser={selectedUser} />}
    </div>
  );
};

export default App;