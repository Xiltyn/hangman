/**
 * Created by Xiltyn on 15.03.2017.
 */
import './assets/scss/main.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from "react-redux";
import Content from './components/Content';
import store from './state/store';

ReactDom.render(
	<Provider store={store}>
		<Content/>
	</Provider>
	, document.getElementById('app')
);