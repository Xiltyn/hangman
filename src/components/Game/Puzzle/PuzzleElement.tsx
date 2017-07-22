import * as React from 'react';

export default class PuzzleElement extends React.Component<any, any> {
	public render() {
		let isActiveClass = this.props.isGuessed ? '' : ' puzzle-element--inactive';

		return (
			<input
				type="text"
				value={this.props.isGuessed ? this.props.value : ''}
				className={"puzzle-element game-input" + isActiveClass + this.props.isBlank}/>
		);
	};
};