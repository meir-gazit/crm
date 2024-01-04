// pages/UserListPage.js
import React, { useEffect, useState } from 'react';
import apiService from '../services/api';
import UserList from '../components/UserList';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiService.getAllUsers();
        setUsers(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} />
    </div>
  );
};

export default UserListPage;
