import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import GroupedSelect from './dropdown'

const InflightFood = () => {
	// let history = useHistory()
	const [users, setUsers] = useState([])

	const [foodOrder, setFoodOrder] = useState([])

	useEffect(() => {
		loadUsers()

		// await axios.post('http://localhost:3001/users', userAtt)
	}, [])

	// const setUsersAttributes = () => {
	// 	setUsersAtt(
	// 		(userAtt.name = users.name),
	// 		(userAtt.email = users.name),
	// 		(userAtt.email = users.email),
	// 	)
	// }

	const bookSeat = async (e, user) => {
		// console.log(e.target.value)
		// console.log(user)

		// console.log(typeof e.target.value)

		// console.log(arr)
		const temp = {
			name: user.name,
			username: user.username,
			email: user.email,
			seat: user.seat,
			food: e.target.value,
		}
		await axios.delete(`http://localhost:3001/users/${user.id}`)
		await axios.post('http://localhost:3001/users', temp)

		// setFoodOrder(arr)
	}
	const allotSeat = (user) => {
		return (
			<select
				name='seats'
				onChange={(e) => {
					bookSeat(e, user)
				}}
			>
				<option value='' selected disabled hidden>
					Select Food item
				</option>
				{foodOrder.map((st) => (
					<option value={st}>{st}</option>
				))}
			</select>
		)
	}

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:3001/users')
		setUsers(result.data)

		axios.get('http://localhost:3003/food').then((res) => {
			// console.log(res.data)
			setFoodOrder(res.data)
		})
	}

	return (
		<div>
			<table class='table'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Seat</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr>
							<th scope='row'>{index + 1}</th>
							<td>{user.name}</td>
							<td>
								<div>{allotSeat(user)}</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default InflightFood
