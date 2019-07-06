import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

import './App.css'
import 'antd/dist/antd.css'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
