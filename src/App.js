import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

import './App.css'
import 'antd/dist/antd.css'
import VictimPage from "./components/VictimPage";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/" component={VictimPage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
