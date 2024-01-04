import React, { useEffect, useState } from 'react'
import { Create, Details, List, Update } from '../components/user'
import apiService from '../services/api'

export default () => {
	const [selectedUser, setSelectedUser] = useState(null)
	const [users, setUsers] = useState([])

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await apiService.getAllUsers()
				setUsers(response.data)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}

		fetchUsers()
	}, [])

	const getSelectedUserNumber = (selectedKey) => {
		console.log({key: selectedKey, user: selectedUser })
		users.map(item => {
			if (item.number == selectedKey)
				setSelectedUser(item)
		})
	}
	
	const handleUpdateUser = async (userData) => {
		try {
			await apiService.updateUser(selectedUser.number, userData)
			const updatedUsers = await apiService.getAllUsers()
			setUsers(updatedUsers.data)
			alert('User Updated.')
			console.log({userpage:{number: selectedUser.number, userData: userData}})
		} catch (error) {
			console.error('Error updating user:', error)
		}
	}
	

	return (
		<>
			<List users={users} getSelectedUserNumber={getSelectedUserNumber} />
			{selectedUser && (
				<>
					<Details user={selectedUser} update={handleUpdateUser} />
				</>
			)}
		</>
	)
}