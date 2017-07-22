import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import todoReducer from "./reducers";

const initialState = {
	activeWord: '',
	usedCharacters: [],
	usedChances: 0,
	gameSteps: [
		{
			id: 1,
			imgSrc: require('./../assets/images/the_hangman/head.png'),
			alt: 'Head',
			className: 'head'
		},
		{
			id: 2,
			imgSrc: require('./../assets/images/the_hangman/neck.png'),
			alt: 'Neck',
			className: 'neck'
		},
		{
			id: 3,
			imgSrc: require('./../assets/images/the_hangman/corpus.png'),
			alt: 'Corpus',
			className: 'corpus'
		},
		{
			id: 4,
			imgSrc: require('./../assets/images/the_hangman/right-arm.png'),
			alt: 'Right Arm',
			className: 'right-arm'
		},
		{
			id: 5,
			imgSrc: require('./../assets/images/the_hangman/left-arm.png'),
			alt: 'Left Arm',
			className: 'left-arm'
		},
		{
			id: 6,
			imgSrc: require('./../assets/images/the_hangman/left-hand.png'),
			alt: 'Right Hand',
			className: 'right-hand'
		},
		{
			id: 7,
			imgSrc: require('./../assets/images/the_hangman/left-hand.png'),
			alt: 'Left Hand',
			className: 'left-hand'
		},
		{
			id: 8,
			imgSrc: require('./../assets/images/the_hangman/left-leg.png'),
			alt: 'Right Leg',
			className: 'right-leg'
		},
		{
			id: 9,
			imgSrc: require('./../assets/images/the_hangman/left-leg.png'),
			alt: 'Left Leg',
			className: 'left-leg'
		},
		{
			id: 10,
			imgSrc: require('./../assets/images/the_hangman/left-foot.png'),
			alt: 'Right Foot',
			className: 'right-foot'
		},
		{
			id: 11,
			imgSrc: require('./../assets/images/the_hangman/left-foot.png'),
			alt: 'Left Foot',
			className: 'left-foot'
		}
	]
};

export default createStore(
	todoReducer,
	initialState,
	applyMiddleware(logger)
);

