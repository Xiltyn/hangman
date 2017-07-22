import {Character} from "./models";

const reducers = (state, action) => {
	switch (action.type) {
		case "GET_NEW_WORD":
			state = {
				...state,
				activeWord: action.wordCharsArray
			};
			break;
		case "COUNT_CHANCES":
			state = {
				...state,
				usedChances: state.usedChances === 12 ? 0 : state.usedChances + 1
			};
			break;
		case "RECORD_MISSED_CHARACTERS":
			state = {
				...state,
				usedCharacters: [...state.usedCharacters, action.missedCharacter],
				gameOver: action.gameOver || false
			};
			break;
		case "RESET_GAME":
			state = {
				activeWord: state.activeWord,
				usedChances: 0,
				usedCharacters: [],
				gameSteps: state.gameSteps
			};
			break;
		case "REVEAL_PUZZLE":
			for (let i = 0; i > state.activeWord.length; i++) {
				state.activeWord[i].isGuessed = true
			}
			break;
		case "UPDATE_PUZZLE":
			let toUpdate = state.activeWord.filter(word => word.value === action.valueToUpdate)

			for (let i = 0; i < toUpdate.length; i++) {
				toUpdate[i].isGuessed = true
			}

			break;
	}
	return state;
};

export default reducers;