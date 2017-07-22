import * as React from 'react';
import {connect} from 'react-redux';
import {CSSTransitionGroup} from 'react-transition-group';

class Hangman extends React.Component<any, any> {
	private assets = {
		bar: require('./../../../assets/images/the_hangman/bar.png')
	};

	public render() {
		let size = this.props.usedChances;
		let steps = this.props.gameSteps;
		let hangmanParts = steps.slice(0, size).map((step, index) =>
			<img
				src={step.imgSrc}
				className={step.className}
				alt={step.alt}
				key={index}/>
		);

		return (
			<div className="hangman">
				<img src={this.assets.bar} className="bar" alt="gibbet | gallows"/>
				<div className="guy">
					<CSSTransitionGroup
						transitionName="guyParts"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={300}
					>
						{hangmanParts}
					</CSSTransitionGroup>
				</div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		usedChances: state.usedChances,
		gameSteps: state.gameSteps
	}
};

export default connect(mapStateToProps)(Hangman);