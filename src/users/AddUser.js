import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
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

	const onSubmit = async (e) => {
		e.preventDefault()
		await axios.post('http://localhost:3001/users', user)
		history.push('/')
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<h1>Hello</h1>
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

				<p>Enter your FoodItem</p>
				<input type='text' value={food} name='food' onChange={onInputChange} />

				<p>Enter your SeatNo.</p>
				<input type='text' value={seat} name='seat' onChange={onInputChange} />

				<button type='submit' value='Submit'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default AddUser
