// userTest.js

import axios from 'axios';
import { faker } from '@faker-js/faker';

const userTest = (() => {
  //---------------------------------------------------
  // utils
  //---------------------------------------------------
  const url = 'http://localhost:5500/users';

  const generateNewUser = () => ({
    username: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 20 }),
  });

  //----------------------------------------------------
  // Function to add user
  //---------------------------------------------------
  async function addUser(newUser = null) {
	try {
	  
		if (!newUser) {
		newUser = generateNewUser();
	  }

      const response = await axios.post(url, newUser);
	  
      if (response.status === 201) {
        console.log(`\n` + response.data);
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nfinally -> lets move on...`);
    }
  }

  //----------------------------------------------------
  // Function to get all users
  //---------------------------------------------------
  async function getAllUsers() {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log(`\n` + JSON.stringify(response.data, null, 2));
        if (Array.isArray(response.data)) {
          console.log('\nResponse is an array.');
        } else {
          console.error('\nResponse is not an array.');
        }
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nfinally -> out...`);
    }
  }

  //----------------------------------------------------
  // Function to get user by id
  //---------------------------------------------------
  async function getUserById(userId = '') {
    try {
      const response = await axios.get(`http://localhost:5500/user/${userId}`);
      if (response.status === 200) {
        if (typeof response.data === 'object') {
          if (response.data.id === userId) {
            console.log('Test Passed: User with the specified ID found.');
          } else {
            console.error('Test Failed: User ID does not match.');
          }
        } else {
          console.error('Test Failed: Response is not an object.');
        }
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nTest completed.`);
    }
  }

  //----------------------------------------------------
  // Function to update user email
  //---------------------------------------------------
  async function updateUserEmail(userId = '', updatedUser = { email: 'updated@email.com' }) {
    try {
      const response = await axios.put(`http://localhost:5500/user/${userId}`, updatedUser);
      if (response.status === 200) {
        console.log('Test Passed: User updated successfully.');
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nTest completed.`);
    }
  }

  //----------------------------------------------------
  // Function to delete user (soft deletion)
  //---------------------------------------------------
  async function softDeleteUser(userId = '', softDeletedUser = { isDeleted: true }) {
    try {
      const response = await axios.put(`http://localhost:5500/user/${userId}`, softDeletedUser);
      if (response.status === 200) {
        console.log("Test Passed: User soft deleted successfully.");
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nTest completed.`);
    }
  }

  //----------------------------------------------------
  // Function to delete user (hard deletion)
  //---------------------------------------------------
  async function hardDeleteUser(userId = '') {
    try {
      const response = await axios.delete(`http://localhost:5500/user/${userId}`);
      if (response.status === 204) {
        console.log("Test Passed: User deleted successfully.");
      } else {
        console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
      }
    } catch (error) {
      console.error(`\nRequest error: \n${error.message}\n`);
    } finally {
      console.log(`\nTest completed.`);
    }
  }

  return {
    addUser,
    getAllUsers,
    getUserById,
    updateUserEmail,
    softDeleteUser,
    hardDeleteUser,
  };
})();

export default userTest;
