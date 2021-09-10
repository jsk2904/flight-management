import React, { Component } from 'react'
import Inflight from './inflight/inflight'
import Checkin from './checkin/Checkin'

export class Utilities extends Component {
	render() {
		return (
			<div className='ui very padded segment'>
				<div className='ui two column very relaxed stackable grid'>
					<div className='column'>
						<div className='ui big button'>
							<Inflight />
						</div>
					</div>
					<div className='column'>
						<div className='ui big button'>
							<Checkin />
						</div>
					</div>
				</div>
				<div class='ui vertical divider'>OR</div>
			</div>
		)
	}
}

export default Utilities
