import React, { Component } from 'react'
import { Tabs, PageHeader, Divider, Carousel } from 'antd'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Logo } from './Logo'
import { Home } from './Home'
import { VolunteerPage } from './Volunteer/VolunteerPage' 
import { Feedback } from './Feedback'
import { Verify } from './Verify'
import VerifyAgain from './VerifyAgain'
import VictimPage from "./VictimPage"

const { TabPane } = Tabs;

class Dashboard extends Component {
	render() {
		return (
			<div style={{ padding:'10px', leftMargin: '50px', fontFamily: 'Helvetica' }}>
				<PageHeader>
					<Logo />
					<Divider />
					<Tabs defaultActiveKey="1" tabPosition="left" tabBarGutter>
						<TabPane tab="Home" key="1">
							<Home />
						</TabPane>
						<TabPane tab="Ask for help" key="2">
							<Route exact path="/" component={VictimPage} />
							<iframe src="https://assistant-chat-us-south.watsonplatform.net/web/public/ba5476dc-f0d7-4484-a6bd-e7470cb3c828" height="800" width="400"></iframe>
						</TabPane>
						<TabPane tab="Give or volunteer" key="3">

							Help fulfill the existing requests made by people from around the world!

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
						<TabPane tab="Identity verification" key="6">
							<VerifyAgain />
						</TabPane>
					</Tabs>
				</PageHeader>
			</div>
		)
	}
}

export default Dashboard
