import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './Reducers'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const store = createStore(
	allReducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
