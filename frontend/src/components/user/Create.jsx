// components/CreateUser.js
import React, { useState } from 'react'
import apiService from '../../services/api'

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
		<div >
		  <h2 className="text-2xl mb-6 text-gray-300 pt-4 flex">Create User {error && <p className="flex">:<p className="text-red-500">{error}</p></p>}</h2>
		  <form>
			<div className="mb-4">
			  <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} placeholder='Name:'
			  	className="w-full p-2 border rounded-md" />
			</div>
			<div className="mb-4">
			  <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange}  placeholder='Email:'
			  	className="w-full p-2 border rounded-md" />
			</div>
			<div className="mb-4">
			  <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange}  placeholder='Password:'
			  	className="w-full p-2 border rounded-md" />
			</div>
			<button type="button" onClick={handleCreateUser} 
				className="w-full rounded-md border border-gray-200 text-left inline-block px-1 py-2 text-gray-400 bg-gray-100">Create User</button>		  </form>
		</div>
	  )	  
}

export default CreateUser
