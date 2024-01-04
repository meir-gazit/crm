// components/CreateUser.js
import React, { useState } from 'react'
import apiService from '../services/api'

const CreateUser = () => {
	const [userData, setUserData] = useState({
		name: '',
		number: 0,
		email: '',
		password: '',
	})

	const [error, setError] = useState('')

	const handleInputChange = (e) => {
		setUserData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}))
	}

	const handleCreateUser = async () => {
		try {
			// Validate input fields before making the API call
			if (!userData.name || !userData.email || !userData.password) {
				setError('Please fill out all required fields')
				return
			}

			await apiService.createUser(userData)
			// Reset error state on success
			setError('')
			// Handle success
		} catch (error) {
			// Handle error
			setError('Error creating user. Please try again.')
		}
	}

	return (
		<div>
			<h2>Create User</h2>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="number">Number:</label>
					<input type="number" id="number" name="number" value={userData.number} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} />
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type="button" onClick={handleCreateUser}>Create User</button>
			</form>
		</div>
	)
}

export default CreateUser
