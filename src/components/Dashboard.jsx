import React, { Component } from 'react'
import { Tabs, PageHeader, Divider, Carousel } from 'antd'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Logo } from './Logo'
import { Home } from './Home'
import { VolunteerPage } from './Volunteer/VolunteerPage' 
import { Feedback } from './Feedback'
import VictimPage from "./VictimPage";

const { TabPane } = Tabs;

class Dashboard extends Component {
	render() {
		return (
			<div style={{ padding: '10px', leftMargin: '50px', fontFamily: 'Helvetica' }}>
				<PageHeader>
					<Logo />
					<Divider />
					<Tabs defaultActiveKey="1" tabPosition="left" tabBarGutter>
						<TabPane tab="Home" key="1">
							<Home />
						</TabPane>
						<TabPane tab="Ask for help" key="2">
							<Route exact path="/" component={VictimPage} />
						</TabPane>
						<TabPane tab="Give or volunteer" key="3">
							Help volunteer by fulfilling the existing requests made by people from around the world!

								Donate money or resources!
								Sign up as a volunteer
								<VolunteerPage />
						</TabPane>
						<TabPane tab="Join Us" key="4">
							Join our team
						</TabPane>
						<TabPane tab="Leave feedback" key="5">
							<Feedback />
						</TabPane>
						<TabPane tab="Leave" key="6">
						</TabPane>
					</Tabs>
				</PageHeader>
			</div>
		)
	}
}

export default Dashboard
