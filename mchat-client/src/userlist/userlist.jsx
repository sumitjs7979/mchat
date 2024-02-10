import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      <h2>Friends</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;