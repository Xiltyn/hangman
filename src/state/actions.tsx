export function getNewWord(wordObject:object) {
	return {
		type: "GET_NEW_WORD",
		wordObject: wordObject
	};
}

export function countChances() {
	return {
		type: "COUNT_CHANCES"
	};
}

export function recordMissedCharacters(missedCharacter:string) {
	return {
		type: "RECORD_MISSED_CHARACTERS",
		missedCharacter: missedCharacter
	}
}

