import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Inflight = (props) => {
	let history = useHistory()

	const checkLogIn = () => {
		if (props.isLogedIn) {
			history.push('/seatbooking')
		} else {
			alert('You must be logged in')
		}
	}
	return <div onClick={checkLogIn}>Inflight</div>
}

const mapStateToProps = (state) => {
	return { isLogedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Inflight)
