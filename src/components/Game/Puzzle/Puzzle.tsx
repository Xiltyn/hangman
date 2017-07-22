import * as React from 'react';
import {connect} from 'react-redux';
import PuzzleElement from "./PuzzleElement";
import {countChances, gameOver, recordMissedCharacters, revealPuzzle, updatePuzzle} from "../../../state/actions";

class Puzzle extends React.Component<any, any> {
	protected monitorGameStatus = () => {
		if (this.props.activeWord.every(elem => elem.isGuessed === true)) {
			this.props.gameOver()
		}
	};

	protected matchKeyboardInput = (event) => {
		let availableChars = this.props.activeWord.map((word, index) => word.value);
		let activeChars = this.props.activeWord;

		if (this.props.usedChances === 10) {
			this.props.gameOver()
			this.props.revealPuzzle();
			this.props.countChances();
			this.forceUpdate()


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
		let constPuzzleElement = (maxNum:number) => {
			let activeChars = this.props.activeWord;
			let result = [];
			let blanksNumber = maxNum - activeChars.length;

			for (let i = 0; i < blanksNumber; i++) {
				result = [...result, {id: activeChars.length + 1, value: ''}]
			}

			for (let i = 0; i < activeChars.length; i++) {
				result = [...result, activeChars[i]]
			}

			return result;
		};

		let puzzleElements = constPuzzleElement(11).map((char, index) =>
			<PuzzleElement
				value={char.value}
				key={index}
				isGuessed={char.isGuessed}
				isBlank={char.value === '' ? ' blank' : '' }
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
			),
		gameOver: () =>
			dispatch(
				gameOver()
			)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);