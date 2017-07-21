import * as React from 'react';
import {connect} from 'react-redux';

class Hangman extends React.Component<any, any> {
	public render() {
		return (
			<div>

			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		remainingChances: state.remainingChances
	}
};

export default connect(mapStateToProps)(Hangman);