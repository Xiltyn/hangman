import * as React from 'react';
import {connect} from 'react-redux';
import {Character} from "../../../state/models";
import PuzzleElement from "./PuzzleElement";
import {countChances, recordMissedCharacters} from "../../../state/actions";

class Puzzle extends React.Component<any, any> {
	private constructor(props) {
		super(props);

		this.state = {
			activeChars: []
		}
	}

	private createCharsArray = (activeWord:string) => {
		let result = [];
		let chars = activeWord.split('');

		chars.map((char, index) =>
			result = [...result, new Character(index, char)]
		);

		this.setState({
			activeChars: result
		});
	};

	protected matchKeyboardInput = (event) => {
		let availableChars = this.props.activeWord.split('');

		if (availableChars.indexOf( String.fromCharCode( event.which ) ) > -1 ) {
			let matchedChar = String.fromCharCode( event.which );
			let activeChars = this.state.activeChars;
			let charsToUpdate = activeChars.filter(char => char.value === matchedChar);

			for (let i = 0; i < charsToUpdate.length; i++) {
				charsToUpdate[i].isGuessed = true
			}

			this.setState({
				activeChars
			})
		} else {
			let missedChar = String.fromCharCode( event.which );

			this.props.countChances();
			this.props.recordMissedCharacters(missedChar);
		}

	};


	public render() {

		let puzzleElements = this.state.activeChars.map((char, index) =>
			<PuzzleElement
				value={char.value}
				key={index}
				isGuessed={char.isGuessed}
			/>
		);

		return (
			<div className="puzzle">
				{puzzleElements}
			</div>
		);
	};
	componentDidMount() {
		this.createCharsArray(this.props.activeWord);

		window.addEventListener('keypress', this.matchKeyboardInput)
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.matchKeyboardInput)
	}
}

const mapStateToProps = (state) => {
	return {
		activeWord: state.activeWord.word
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		countChances: () =>
			dispatch(
				countChances()
			),
		recordMissedCharacters: (missedCharacter:string) =>
			dispatch(
				recordMissedCharacters(missedCharacter)
			)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);