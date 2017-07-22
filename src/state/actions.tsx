export function getNewWord(wordCharsArray:Array<object>) {
	return {
		type: "GET_NEW_WORD",
		wordCharsArray: wordCharsArray
	};
}

export function countChances() {
	return {
		type: "COUNT_CHANCES"
	};
}

export function recordMissedCharacters(missedCharacter:string, gameOver:boolean = false) {
	return {
		type: "RECORD_MISSED_CHARACTERS",
		missedCharacter: missedCharacter,
		gameOver: gameOver
	}
}

export function resetGame() {
	return {
		type: "RESET_GAME"
	};
}

export function revealPuzzle() {
	return {
		type: "REVEAL_PUZZLE"
	};
}

export function updatePuzzle(valueToUpdate:string) {
	return {
		type: "UPDATE_PUZZLE",
		valueToUpdate: valueToUpdate
	};
}