import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Button } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
// import EditUser from './users/EditUser'

const InflightData = () => {
	let history = useHistory()
	const id = useParams()
	console.log(id)
	const changeHistory = () => {
		history.push('/users/add')
	}

	const moveToEdit = (user) => {
		// console.log(e)
		history.push(`/users/edit/${user.id}`)
	}
	const [users, setUser] = useState([])

	useEffect(() => {
		loadUsers()
	}, [])

	const loadUsers = async (users) => {
		// console.log(users)
		const result = await axios.get('http://localhost:3001/users')

		setUser(result.data)
		console.log(result.data)
	}

	const deleteUser = async (user) => {
		await axios.delete(`http://localhost:3001/users/${user.id}`)
		loadUsers()
	}

	const viewUser = (user) => {
		// console.log(us.id)
		history.push(`/users/${user.id}`)
	}

	return (
		<div className='container'>
			<div className='py-4'>
				<h1>InflightData Page</h1>
			</div>
			<button onClick={changeHistory} className='btn btn-danger'>
				Add user
			</button>

			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>First</th>
						<th scope='col'>Last</th>
						<th scope='col'>Handle</th>
					</tr>
				</thead>
				<tbody>
					{users.map((users, index) => (
						<tr>
							<th scope='row'>{index + 1}</th>
							<td>{users.name}</td>
							<td>{users.username}</td>
							<td>{users.email}</td>
							<td>
								<button
									onClick={() => viewUser(users)}
									type='button'
									class='btn btn-primary'
								>
									View
								</button>
								<button
									onClick={() => moveToEdit(users)}
									type='button'
									class='btn btn-secondary'
								>
									Edit
								</button>
								<button
									onClick={() => deleteUser(users)}
									type='button'
									class='btn btn-success'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default InflightData
