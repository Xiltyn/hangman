import * as React from 'react';
import {connect} from 'react-redux';
import './../../assets/scss/components/Game/Game';
import Hangman from "./Hangman/Hangman";
import Missed from "./Missed/Missed";
import Puzzle from "./Puzzle/Puzzle";
import GameOver from "./GameOver/GameOver";

class Game extends React.Component<any, any> {
	public render() {
		let isGameOver = this.props.gameOver ? <GameOver/> : null;

		return (
			<section className="wrapper">
				{isGameOver}
				<Hangman />
				<Missed />
				<Puzzle />
			</section>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		gameOver: state.gameOver
	}
};

export default connect(mapStateToProps)(Game);