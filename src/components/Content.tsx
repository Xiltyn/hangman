import * as React from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import {getNewWord} from "../state/actions";
import Spinner from "./global/Spinner";
import Game from "./Game/Game";
import {Character} from "../state/models";

class Content extends React.Component <any, any> {
	public render() {


		let currentView = !this.props.data ? <Spinner /> : <Game />;

		return(
			<div className="content-wrapper">
				{currentView}
			</div>
		)
	}
	componentWillMount() {
		let $th = this;
		axios
			.get("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
			.then(function(result) {
				let output = [];
				let resultSplit = result.data.word.split('');
				resultSplit.map((char, index) =>
					output = [...output, {id: index, value: char, isGuessed:false}]
				);
				$th.props.getNewWord(output)
			})
	}

}
const mapStateToProps = (state) => {
    return {
        data: state.activeWord
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getNewWord: (wordObject:Array<Character>) =>
			dispatch(
				getNewWord(wordObject)
			)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);