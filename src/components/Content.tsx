import * as React from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import {getNewWord} from "../state/actions";
import Spinner from "./global/Spinner";

class Content extends React.Component <any, any> {
	public render() {

		return(
			<div className="content-wrapper">
				{
					!this.props.data ? <Spinner /> : <h1> Hello World! </h1>
				}
			</div>
		)
	}
	componentWillMount() {
		let $th = this;
		axios
			.get("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
			.then(function(result) {
				$th.props.getNewWord(result.data)
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
		getNewWord: (wordObject:object) =>
			dispatch(
				getNewWord(wordObject)
			)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);