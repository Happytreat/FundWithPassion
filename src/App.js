import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GameDashboard from './components/Game/GameDashboard'

import './App.css'
import 'antd/dist/antd.css'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/game" component={GameDashboard} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
