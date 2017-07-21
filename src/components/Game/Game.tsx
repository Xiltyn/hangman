import * as React from 'react';
import './../../assets/scss/components/Game/Game';
import Hangman from "./Hangman/Hangman";
import Missed from "./Missed/Missed";
import Puzzle from "./Puzzle/Puzzle";

export default class Game extends React.Component<any, any> {
	public render() {
		return (
			<section className="wrapper">
				<Hangman />
				<Missed />
				<Puzzle />
			</section>

		)
	}
}
