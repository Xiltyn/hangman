const reducers = (state, action) => {
	switch (action.type) {
		case "GET_NEW_WORD":
			state = {
				...state,
				activeWord: action.wordObject
			};
			break;
		case "DECREASE_CHANCES":
			state = {
				...state,
				remainingChances: state.remainingChances === 0 ? 12 : state.remainingChances - 1
			};
			break;
	}
	return state;
};

export default reducers;