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
							</TabPane>
						<TabPane tab="Give or volunteer" key="3">

							Help fulfill the existing requests made by people from around the world!

							Donate money or resources!
							Sign up as a volunteer
							<VolunteerPage />

						</TabPane>
						<TabPane tab="Join Us" key="4">
						<h1><b>Publish Games on Fund With Passion</b></h1>
						This is the documentation for the Fund With Passion Public API.
						<br />
						Request to sign up as Fund With Passion developer here and our team will send over your user/dapp information with an API token:
						<br />

							<iframe
								src="https://docs.google.com/forms/d/e/1FAIpQLSe0Q1BAcBZd-hN17aOGekUA9y2naLlZOVedNnvoXt8pcC138Q/viewform?embedded=true"
								width="640" height="945" frameBorder="0" marginHeight="0" marginWidth="0"> Loading...
							</iframe>
						</TabPane>
						<TabPane tab="Leave feedback" key="5">
							<Feedback />
						</TabPane>
						<TabPane tab="Chat with us!" key="6">
							<iframe src="https://assistant-chat-us-south.watsonplatform.net/web/public/ba5476dc-f0d7-4484-a6bd-e7470cb3c828" height="800" width="400"></iframe>
						</TabPane>
					</Tabs>
				</PageHeader>
			</div>
		)
	}
}

export default Dashboard
