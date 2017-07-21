import * as React from 'react';
import {connect} from 'react-redux';

class Missed extends React.Component<any, any> {
	public render() {
		let toUppercase = {
			textTransform: 'uppercase'
		};

		let missedChars = this.props.usedCharacters.map((char, index) =>
			<span className="missed-char">
				{char}
			</span>
		);

		return (
			<div className="missed">
			 	<p style={toUppercase}>
					You missed:
				</p>
				{missedChars}
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		usedCharacters: state.usedCharacters
	}
};

export default connect(mapStateToProps)(Missed);