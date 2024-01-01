// components/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.number}>
            {user.name} - {user.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
