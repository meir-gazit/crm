// components/UpdateUser.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api';

const UpdateUser = () => {
  const { number } = useParams();
  const history = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    number: 0,
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiService.getUserByNumber(number);
        setUserData(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchUser();
  }, [number]);

  const handleInputChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      await apiService.updateUser(number, userData);
      // Handle success
      history.push(`/users/${number}`);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h3>Update User</h3>
      <form>
        {/* Render input fields with onChange handlers */}
        <button type="button" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
