import * as React from 'react';
import '../../assets/scss/components/global/tooltip';

export default class Tooltip extends React.Component<any, any> {
	render() {
		return(
			<div className={"tooltip " + this.props.position}>
				{this.props.children}
			</div>
		)
	}
}