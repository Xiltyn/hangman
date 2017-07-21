import * as React from 'react';
import {connect} from 'react-redux';

class Puzzle extends React.Component<any, any> {
	private constructor(props) {
		super(props);

		this.state = {
			activeChars: []
		}
	}

	private createCharsArray = (activeWord:string) => {
		this.setState({
			activeChars: activeWord.split('')
		})
		console.log(activeWord)
		console.log(activeWord.split(''))
	};

	public render() {
		let puzzleElements = this.state.activeChars.map((char, index) =>
			<input
				type="text"
				value={char}
				key={index}
				className="puzzle-element game-input"/>
		);

		return (
			<div className="puzzle">
				{puzzleElements}
			</div>
		);
	};
	componentDidMount() {
		this.createCharsArray(this.props.activeWord)
	}
}

const mapStateToProps = (state) => {
	return {
		activeWord: state.activeWord.word
	}
};

export default connect(mapStateToProps)(Puzzle);