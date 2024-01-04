// components/UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api';

const UserDetails = () => {
  const { number } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiService.getUserByNumber(number);
        setUser(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchUser();
  }, [number]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.name}</p>
      <p>Number: {user.number}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
