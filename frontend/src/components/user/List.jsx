import React from 'react'

const List = ({ users, getSelectedUserNumber }) => {

	const handleClick = async (e) => {
		const userNumber = e.target.options[e.target.selectedIndex].getAttribute('data-key')
		getSelectedUserNumber(userNumber)
	}

	return (
		<div>
			<select onChange={(e) => handleClick(e)}>
				<option key="0" value="User List">User List</option>
				{users.map((user) => (
					<option key={user.number} value={user.name} data-key={user.number}>{user.name}</option>
				))}
			</select>
		</div>
	)
}

export default List
