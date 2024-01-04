import React, { useState, useEffect } from 'react';

const UpdateUser = ({ user, onSave }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    setUserData({
      name: user.name,
      email: user.email,
      password: '',
    });
  }, [user]);

  const handleInputChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      if (!userData.name || !userData.email) {
        setError('Please fill out all required fields');
        return;
      }

      onSave(userData);

      setError('');
    } catch (error) {
      setError('Error updating user. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-6 text-gray-300 pt-4 flex">Update User {error && <p className="flex">:<p className="text-red-500">{error}</p></p>}</h2>
      <form>
        <div className="mb-4">
          <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} placeholder="Name:" className="w-full p-2 border rounded-md"/>
        </div>
        <div className="mb-4">
          <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email:" className="w-full p-2 border rounded-md"/>
        </div>
        <div className="mb-4">
          <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Password:" className="w-full p-2 border rounded-md"/>
        </div>
        <button type="button" onClick={handleUpdateUser} className="w-full rounded-md border border-gray-200 text-left inline-block px-1 py-2 text-gray-400 bg-gray-100">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
