import React from 'react'
import ReactDOM from 'react-dom'
// import Home from './dummy'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import App from './components/App'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers())
ReactDOM.render(
	<Provider store={store}>
		<App />
		{/* <Home /> */}
	</Provider>,
	document.querySelector('#root'),
)
