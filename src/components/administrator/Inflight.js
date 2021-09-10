import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Inflight = (props) => {
	let history = useHistory()

	const renderInflight = () => {
		if (props.isSignedIn) {
			history.push('/admin')
		} else {
			window.alert('please Log in to continue')
		}
	}
	return <div onClick={renderInflight}>Admin</div>
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps)(Inflight)
