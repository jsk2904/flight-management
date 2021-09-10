import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {
	const { id } = useParams()
	// console.log(useParams())
	let history = useHistory()
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		food: '',
		seat: '',
	})

	const { name, username, email, food, seat } = user
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		loadUser()
	}, [])

	const onSubmit = async (e) => {
		e.preventDefault()
		await axios.put(`http://localhost:3001/users/${id}`, user)
		history.push('/')
	}

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:3001/users/${id}`)
		setUser(result.data)
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<h1>EditUser</h1>
				<p>Enter your firstName:</p>
				<input type='text' value={name} name='name' onChange={onInputChange} />
				<p>Enter your lastName:</p>
				<input
					type='text'
					value={username}
					name='username'
					onChange={onInputChange}
				/>
				<p>Enter your emailId</p>
				<input
					type='email'
					value={email}
					name='email'
					onChange={onInputChange}
				/>

				<p>Enter your Food Item</p>
				<input type='text' value={food} name='food' onChange={onInputChange} />

				<p>Enter your SeatNo.</p>
				<input type='text' value={seat} name='seat' onChange={onInputChange} />

				<button type='submit' value='Submit'>
					Update user
				</button>
			</form>
		</div>
	)
}

export default EditUser
