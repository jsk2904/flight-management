import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Utilities from './Utilities'
import GoogleAuth from './googleOauth/GoogleAuth'
import InflightSection from './administrator/InflightSection'
// import Admin from './administrator/Inflight'
// import dummy from '../dummy'
import AddUsers from '../users/AddUser'
import EditUser from '../users/EditUser'
import User from '../users/User'
import InflightBooking from './inflight/InflightBooking'

import CheckinSection from './checkin/CheckinSection'

export class App extends Component {
	render() {
		return (
			<div className='ui container'>
				<BrowserRouter>
					<div>
						<Route path='/' exact component={GoogleAuth} />
						<Route path='/' exact component={Utilities} />
						{/* <Route path='/' exact component={Admin} /> */}

						<Route path='/checkin' exact component={CheckinSection} />
						<Route path='/seatbooking' exact component={InflightBooking} />
						<Route path='/admin' exact component={InflightSection} />

						<Route path='/users/add' exact component={AddUsers} />

						<Route path='/users/edit/:id' exact component={EditUser} />

						<Route path='/users/:id' exact component={User} />

						<Route path='/foodSection' exact component={CheckinSection} />
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
