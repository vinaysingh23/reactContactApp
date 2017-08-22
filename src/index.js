import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducers from './Reducers'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const store = createStore(allReducers);


ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter history ={history}>
		<App history={history}/>
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
 );
registerServiceWorker();
