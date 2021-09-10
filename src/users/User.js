import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
	})

	const { id } = useParams()
	useEffect(() => {
		loadUsers()
	}, [])
	const loadUsers = async (users) => {
		console.log(users)
		const result = await axios.get(`http://localhost:3001/users/${id}`)

		setUser(result.data)
		console.log(id)
	}

	return (
		<div>
			<div class='card-body'>
				<h5 class='card-title'>Name: {user.name}</h5>
				<h5 class='card-subtitle mb-2 text-muted'>UserName :{user.username}</h5>
				<h5 class='card-title'>Email: {user.email}</h5>
				<h5 class='card-subtitle mb-2 text-muted'>Seat :{user.seat}</h5>
				<h5 class='card-title'>Food Item: {user.food}</h5>
			</div>
		</div>
	)
}

export default User
