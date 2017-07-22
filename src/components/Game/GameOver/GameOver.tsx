import * as React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getNewWord, resetGame} from "../../../state/actions";
import {Character} from "../../../state/models";

class GameOver extends React.Component<any, any> {
	protected _handleClick = () => {
		let $th = this;

		axios
			.get("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
			.then(function(result) {
				let output = [];
				let resultSplit = result.data.word.split('');
				resultSplit.map((char, index) =>
					output = [...output, {id: index, value: char, isGuessed:false}]
				);
				$th.props.getNewWord(output)
			});

		this.props.resetGame();
	};

	public render() {
		return (
			<div className="game-over">
				<h1 className="game-over-text">
					Game Over
				</h1>
				<button className="restart-btn" onClick={this._handleClick}>
					New Word
				</button>
			</div>
		);
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetGame: () =>
			dispatch(
				resetGame()
			),
		getNewWord: (wordObject:Array<Character>) =>
			dispatch(
				getNewWord(wordObject)
			)
	}
};

export default connect (null, mapDispatchToProps)(GameOver)