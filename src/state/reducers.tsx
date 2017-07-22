const reducers = (state, action) => {
	switch (action.type) {
		case "GET_NEW_WORD":
			state = {
				...state,
				activeWord: action.wordObject
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
				usedCharacters: [...state.usedCharacters, action.missedCharacter]
			};
			break;
	}
	return state;
};

export default reducers;