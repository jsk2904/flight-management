import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Checkin = (props) => {
	let history = useHistory()

	const checkLogIn = () => {
		if (props.isLogedIn) {
			history.push('/foodSection')
		} else {
			alert('You must be logged in')
		}
	}
	return <div onClick={checkLogIn}>Checkin</div>
}

const mapStateToProps = (state) => {
	return { isLogedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Checkin)
