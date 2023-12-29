import axios from 'axios'
import { faker } from '@faker-js/faker'

//---------------------------------------------------
// utils
//---------------------------------------------------
const url = 'http://localhost:5500/users'

const newUser = {
	username: faker.person.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password({ length: 20 })
}

const userId = ''

const updatedUser = {
	email: 'updated@email.com'
}
const softDeletedUser = {
	isDeleted: true
  }

//----------------------------------------------------
// add user
//---------------------------------------------------
axios
	.post(url, newUser)
	.then((response) => {
		if (response.status === 201) {
			console.log(`\n` + response.data)
		} else {
			console.error(
				`\nError: \n${response.status} \n${response.statusText}\n`
			)
		}
	})
	.catch((error) => {
		console.error(`\nRequest error: \n${error.message}\n`)
	})
	.finally(console.log(`\nfinally -> lets move on...`))

//----------------------------------------------------
// get all users
//----------------------------------------------------
axios
	.get(url)
	.then((response) => {
		if (response.status === 200) {
			console.log(`\n` + JSON.stringify(response.data, null, 2))
			if (Array.isArray(response.data)) {
				console.log('\nResponse is an array.')
			} else {
				console.error('\nResponse is not an array.')
			}
		} else {
			console.error(
				`\nError: \n${response.status} \n${response.statusText}\n`
			)
		}
	})
	.catch((error) => {
		console.error(`\nRequest error: \n${error.message}\n`)
	})
	.finally(() => {
		console.log(`\nfinally -> out...`)
	})

//----------------------------------------------------
// get user by id
//----------------------------------------------------
axios
	.get(`http://localhost:5500/user/${userId}`)
	.then((response) => {
		if (response.status === 200) {
			if (typeof response.data === 'object') {
				if (response.data.id === userId) {
					console.log(
						'Test Passed: User with the specified ID found.'
					)
				} else {
					console.error('Test Failed: User ID does not match.')
				}
			} else {
				console.error('Test Failed: Response is not an object.')
			}
		} else {
			console.error(
				`\nError: \n${response.status} \n${response.statusText}\n`
			)
		}
	})
	.catch((error) => {
		console.error(`\nRequest error: \n${error.message}\n`)
	})
	.finally(() => {
		console.log(`\nTest completed.`)
	})

//----------------------------------------------------
// update user email
//----------------------------------------------------
axios
	.put(`http://localhost:5500/user/${userId}`, updatedUser)
	.then((response) => {
		if (response.status === 200) {
			console.log('Test Passed: User updated successfully.')
		} else {
			console.error(
				`\nError: \n${response.status} \n${response.statusText}\n`
			)
		}
	})
	.catch((error) => {
		console.error(`\nRequest error: \n${error.message}\n`)
	})
	.finally(() => {
		console.log(`\nTest completed.`)
	})

//----------------------------------------------------
// delete user (soft deletion)
//----------------------------------------------------
axios
  .put(`http://localhost:5500/user/${userId}`, softDeletedUser)
  .then((response) => {
    if (response.status === 200) {
      console.log("Test Passed: User soft deleted successfully.")
    } else {
      console.error(`\nError: \n${response.status} \n${response.statusText}\n`)
    }
  })
  .catch((error) => {
    console.error(`\nRequest error: \n${error.message}\n`)
  })
  .finally(() => {
    console.log(`\nTest completed.`)
  })

//----------------------------------------------------
// delete user (hard deletion)
//----------------------------------------------------
  axios
  .delete(`http://localhost:5500/user/${userId}`)
  .then((response) => {
    // Checking if the response status is 204 (No Content)
    if (response.status === 204) {
      console.log("Test Passed: User deleted successfully.");
    } else {
      // Handling errors if the status is not 204
      console.error(`\nError: \n${response.status} \n${response.statusText}\n`);
    }
  })
  .catch((error) => {
    // Handling errors in the request
    console.error(`\nRequest error: \n${error.message}\n`);
  })
  .finally(() => {
    console.log(`\nTest completed.`);
  });
  //==================================================