import * as React from 'react';
import {connect} from 'react-redux';

class Game extends React.Component<any, any> {

	public render() {
		console.log(this.props.data);

		return (
			<section>
				<h1>
					Hello There Folks! The game will begin shortly! <br/>The word for today is:
				</h1>
				<h2>
					{this.props.data.word}
				</h2>

			</section>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.activeWord
	}
};

export default connect(mapStateToProps)(Game);