// import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import InflightFood from './InflightFood'

const CheckinSection = (props) => {
	if (!props.isSignedIn) {
		return <Redirect to='/' />
	}
	return (
		<div>
			<InflightFood />
		</div>
	)
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps)(CheckinSection)
