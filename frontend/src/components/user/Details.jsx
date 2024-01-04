import React, { useEffect, useState } from 'react'

const UserDetails = ({ user, update}) => {
	const [userName, setUserName] = useState(user.name)
	const [userEmail, setUserEmail] = useState(user.email)
	const [inputDisabled, setInputDisabled] = useState(true)

	useEffect(() => {
		setUserName(user.name)
		setUserEmail(user.email)
	}, [user])

	const toggleInputMode = () => { setInputDisabled((prevDisabled) => !prevDisabled) }
	const handleNameChange = (e) => { setUserName(e.target.value) }
	const handleEmailChange = (e) => { setUserEmail(e.target.value) }

	const inputClass = inputDisabled ? 'text-gray-500 bg-gray-200 m-1 p-1' : 'text-gray-500'

	const handlleSave = (userData) => {
		update(userData)
		toggleInputMode()
	}

	return (
		<div>
			<div className='flex mt-2'>
				<label htmlFor="username" className='mr-2'>name:</label>
				<input type="text" id="username" className={inputClass} value={userName} readOnly={inputDisabled} onChange={handleNameChange} />
			</div>
			<div className='flex'>
				<label htmlFor="email" className='mr-2'>email </label>
				<input type="text" id="email" className={`${inputClass} w-auto`} value={userEmail} readOnly={inputDisabled} onChange={handleEmailChange} />
			</div>
			<div className='flex'>
				<label htmlFor="number" className='mr-2'>numbe: </label>
				<input type="text" id="number" className='text-gray-500' value={user.number} disabled />
			</div>
			{ inputDisabled && <button onClick={toggleInputMode} className='border px-1 mt-2 border-gray-500'>Edit</button> }
			{ !inputDisabled && <button onClick={() => handlleSave({userName: username.value, email: email.value, number: number.value})} className='border px-1 mt-2 border-gray-500'>Save</button> }
		</div>
	)
}

export default UserDetails
