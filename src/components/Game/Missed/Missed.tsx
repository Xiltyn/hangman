import * as React from 'react';
import {connect} from 'react-redux';

class Missed extends React.Component<any, any> {
	public render() {
		let missedChars = this.props.usedCharacters.map((char, index) =>
			<li className="missed-char" key={index}>
				{char}
			</li>
		);

		return (
			<div className="missed">
			 	<p>
					You missed:
				</p>
				<ul>
					{missedChars}
				</ul>
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