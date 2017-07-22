import * as React from 'react';
import {connect} from 'react-redux';
import PuzzleElement from "./PuzzleElement";
import {countChances, recordMissedCharacters, revealPuzzle, updatePuzzle} from "../../../state/actions";
import {Character} from "../../../state/models";

class Puzzle extends React.Component<any, any> {
	protected monitorGameStatus = () => {
		if (this.props.usedChances === 11 || this.props.activeWord.every(elem => elem.isGuessed === true)) {
			this.props.recordMissedCharacters(null, true)
		}
	};

	protected matchKeyboardInput = (event) => {
		let availableChars = this.props.activeWord.map((word, index) => word.value);
		let activeChars = this.props.activeWord;

		if (this.props.gameOver === true) {
			this.props.revealPuzzle();
			this.props.countChances();

		} else if (availableChars.indexOf( String.fromCharCode( event.which ) ) > -1 ) {
			let matchedChar = String.fromCharCode( event.which );
			let charToUpdate = activeChars.filter(char => char.value === matchedChar);
			let valueToUpdate = charToUpdate[0].value;

			for (let i = 0; i < activeChars.length; i++) {
				if ( activeChars[i].id === charToUpdate.id) {
						activeChars[i].isGuessed = true
				}
			}

			this.props.updatePuzzle(valueToUpdate);
			this.forceUpdate()

		} else {
			let missedChar = String.fromCharCode( event.which );

			this.props.countChances();
			this.props.recordMissedCharacters(missedChar);
		}

	};

	public render() {

		let puzzleElements = this.props.activeWord.map((char, index) =>
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
	componentWillMount() {
		window.addEventListener('keypress', this.matchKeyboardInput);
		window.addEventListener('keyup', this.monitorGameStatus)

	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.matchKeyboardInput);
		window.removeEventListener('keyup', this.monitorGameStatus)
	}
}

const mapStateToProps = (state) => {
	return {
		activeWord: state.activeWord,
		usedChances: state.usedChances,
		gameOver: state.gameOver
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		countChances: () =>
			dispatch(
				countChances()
			),
		recordMissedCharacters: (missedCharacter:string, gameOver:boolean) =>
			dispatch(
				recordMissedCharacters(missedCharacter, gameOver)
			),
		revealPuzzle: () =>
			dispatch(
				revealPuzzle()
			),
		updatePuzzle: (valueToUpdate:string) =>
			dispatch(
				updatePuzzle(valueToUpdate)
			)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);