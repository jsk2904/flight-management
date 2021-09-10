import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'
import Admin from '../administrator/Inflight'
export class GoogleAuth extends Component {
	// state = { isLogedIn: false }

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'755597558560-a1hp5nu4kortblmtpimco44a4ev9a2b8.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					// console.log(this)
					// window.gapi.auth2.getAuthInstance()
					this.auth = window.gapi.auth2.getAuthInstance()
					this.onAuthChange(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChange)
				})
		})
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId())
		} else {
			this.props.signOut()
		}
	}

	onSignOutClick = () => {
		// this.setState({ isLogedIn: false })
		// console.log(this.state.isLogedIn)
		// console.log(this)
		// const auth = window.gapi.auth2.getAuthInstance()
		// auth.signIn()
		// console.log(this.state.isLogedIn)
		this.auth.signOut()
	}

	onSignInClick = () => {
		this.auth.signIn()
		// console.log(this.auth)
	}

	// updateState = (isSignedIn) => {
	// 	// console.log('loggedin ' + isSignedIn)
	// 	// console.log('state is ' + this.state.isLogedIn)
	// 	// this.setState({ isLogedIn: !isSignedIn })
	// 	// console.log(this.state.isLogedIn)
	// 	// console.log(isSignedIn)
	// 	this.setState({ isLogedIn: isSignedIn })
	// }

	Admin = () => {
		return (
			<div className=' ui lefts floated primary button'>
				<button className='ui red google button'>
					<Admin />
				</button>
			</div>
		)
	}

	renderAuthButton = () => {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<div className='ui clearing segment'>
					<div className=' ui right floated primary button'>
						<button
							onClick={this.onSignOutClick}
							className='ui red google button'
						>
							Log Out
						</button>
					</div>

					{this.Admin()}
				</div>
			)
		} else {
			return (
				<div className='ui clearing segment'>
					<div className=' ui right floated primary button'>
						<button
							onClick={this.onSignInClick}
							className='ui red google button'
						>
							Log In
						</button>
					</div>

					{this.Admin()}
				</div>
			)
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}
const mapStateToProps = (state) => {
	console.log(state)
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)

// export default Googleauth
