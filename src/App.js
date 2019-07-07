import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GameDashboard from './components/Game/GameDashboard'


import './App.css'
import 'antd/dist/antd.css'
import VictimPage from "./components/VictimPage"
import VolSignBkgd from './components/Volunteer/VolunteerSignup'

class App extends Component {
	render() {
		return (
			<BrowserRouter>	
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/" component={VictimPage} />
					<Route exact path="/game" component={GameDashboard} />
					<Route exact path="/Volunteer" component={VolSignBkgd} />

				</Switch> 
			</BrowserRouter>
		)
	}
}

export default App
