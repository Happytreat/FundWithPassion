import React, { Component } from 'react'
import { Tabs, PageHeader, Divider } from 'antd'
import { Logo } from '../Logo'

const { TabPane } = Tabs;

class GameDashboard extends Component {
  render() {
    return (
      <div style={{ padding: '10px', leftMargin: '50px', fontFamily: 'Helvetica' }}>
        <PageHeader>
          <Logo />
          <Divider />
        </PageHeader>
        <Tabs defaultActiveKey="1" tabPosition="left" tabBarGutter>
          <TabPane tab="Home" key="1">
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default GameDashboard
