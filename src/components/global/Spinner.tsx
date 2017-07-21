import * as React from 'react';
import './../../assets/scss/components/global/spinner';

export default class Spinner extends React.Component<any, any> {
	render() {
		return (
			<div className="spinner-wrapper">
				<div className="spinner">
					<div className="cube1"/>
					<div className="cube2"/>
				</div>
			</div>
		)
	}
}