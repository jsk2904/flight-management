// import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import InflightData from './InflightData.js'

const InflightSection = (props) => {
	if (!props.isSignedIn) {
		return <Redirect to='/' />
	}

	return (
		<div>
			<InflightData />
		</div>
	)
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn }
}
export default connect(mapStateToProps)(InflightSection)
