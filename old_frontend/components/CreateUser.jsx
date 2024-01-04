// components/CreateUser.js
import React, { useState } from 'react';
import apiService from '../services/api';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    number: 0,
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateUser = async () => {
    try {
      await apiService.createUser(userData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        {/* Render input fields with onChange handlers */}
        <button type="button" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
