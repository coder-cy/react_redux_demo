import React from 'react'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
)