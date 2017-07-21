import * as React from 'react';
import {connect} from 'react-redux';

class Hangman extends React.Component<any, any> {
	private assets = {
		bar: require('./../../../assets/images/the_hangman/bar.png'),
		corpus: require('./../../../assets/images/the_hangman/corpus.png'),
		head: require('./../../../assets/images/the_hangman/head.png'),
		leftArm: require('./../../../assets/images/the_hangman/left-arm.png'),
		rightArm: require('./../../../assets/images/the_hangman/right-arm.png'),
		leftFoot: require('./../../../assets/images/the_hangman/left-foot.png'),
		leftHand: require('./../../../assets/images/the_hangman/left-hand.png'),
		leftLeg: require('./../../../assets/images/the_hangman/left-leg.png'),
		neck: require('./../../../assets/images/the_hangman/neck.png')
	};

	public render() {
		return (
			<div className="hangman">
				<img src={this.assets.bar} className="bar" alt="gibbet | gallows"/>
				<div className="guy">
					<img src={this.assets.head} className="head" alt="head"/>
					<img src={this.assets.neck} className="neck" alt="neck"/>
					<img src={this.assets.corpus} className="corpus" alt="corpus"/>
					<img src={this.assets.leftArm} className="left-arm" alt="left arm"/>
					<img src={this.assets.leftHand} className="left-hand" alt="left hand"/>
					<img src={this.assets.leftLeg} className="left-leg" alt="left leg"/>
					<img src={this.assets.leftFoot} className="left-foot" alt="left foot"/>
					<img src={this.assets.rightArm} className="right-arm" alt="right arm"/>
					<img src={this.assets.leftHand} className="right-hand" alt="right hand"/>
					<img src={this.assets.leftLeg} className="right-leg" alt="right leg"/>
					<img src={this.assets.leftFoot} className="right-foot" alt="right foot"/>
				</div>
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