import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import todoReducer from "./reducers";

const initialState = {
	activeWord: '',
	usedCharacters: ['b', 'j', 'p'],
	remainingChances: 12
};

export default createStore(
	todoReducer,
	initialState,
	applyMiddleware(logger)
);

