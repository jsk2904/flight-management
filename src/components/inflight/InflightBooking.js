import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import GroupedSelect from './dropdown'

const InflightBooking = () => {
	let history = useHistory()
	const [users, setUsers] = useState([])

	const [seatNo, setSeatNo] = useState([])

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
		let arr = seatNo
		let tempSeatNo = parseInt(e.target.value)

		// console.log(typeof e.target.value)
		arr = arr.filter((item) => item !== tempSeatNo)

		console.log(arr)
		const temp = {
			name: user.name,
			username: user.username,
			email: user.email,
			seat: e.target.value,
		}
		await axios.delete(`http://localhost:3001/users/${user.id}`)
		await axios.post('http://localhost:3001/users', temp)

		setSeatNo(arr)
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
					Book seat here
				</option>
				{seatNo.map((st) => (
					<option value={st}>{st}</option>
				))}
			</select>
		)
	}

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:3001/users')
		setUsers(result.data)

		axios.get('http://localhost:3002/seats').then((res) => {
			// console.log(res.data)
			setSeatNo(res.data)
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

export default InflightBooking
