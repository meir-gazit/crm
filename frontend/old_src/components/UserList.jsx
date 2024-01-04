// components/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
	  <select>
	  	<option key='0' value='User List'>User List</option>
		{users.map((user) => (
			<option key={user.number} value={user.number}>
			{user.name} - {user.number}
			</option>
		))}
		</select>
    </div>
  );
};

export default UserList;
