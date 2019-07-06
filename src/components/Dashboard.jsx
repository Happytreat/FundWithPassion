import React, { Component } from 'react'
import { Tabs, PageHeader, Divider, Button } from 'antd'
import { Logo } from './Logo'

const { TabPane } = Tabs

class Dashboard extends Component {
	render() {
		return (
			<div style={{ padding: '10px', leftMargin: '50px', fontFamily: 'Helvetica' }}>
				<PageHeader>
					<Logo />
					<Divider />
					<Tabs defaultActiveKey="1" tabPosition="left" tabBarGutter>
						<TabPane tab="Component 1" key="1">
							First component
						</TabPane>
						<TabPane tab="Component 2" key="2">
							2 component
						</TabPane>
						<TabPane tab="Component 3" key="3">
							3 component
						</TabPane>
						<TabPane tab="Component 4" key="4">
							4 component
						</TabPane>
					</Tabs>
				</PageHeader>
			</div>
		)
	}
}

export default Dashboard
