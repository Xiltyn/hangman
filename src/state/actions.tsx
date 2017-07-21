export function getNewWord(wordObject:object) {
	return {
		type: "GET_NEW_WORD",
		wordObject: wordObject
	};
}

export function deacreaseChances() {
	return {
		type: "DECREASE_CHANCES"
	};
}


