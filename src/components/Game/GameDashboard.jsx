import React, { Component } from 'react'
import { Tabs, PageHeader, Divider } from 'antd'
import { Logo } from '../Logo'
import AboutGame from './AboutGame'

const { TabPane } = Tabs;

class GameDashboard extends Component {
  render() {
    return (
      <div style={{ padding: '10px', leftMargin: '50px', fontFamily: 'Helvetica' }}>
        <PageHeader>
          <Logo />
          <Divider />
        </PageHeader>
        <div style={{ marginLeft: '40%' }}>
          <PageHeader title="PassionRobo Challenge" subTitle="Summon unique PassionRobos and join tournaments!" />
        </div>
        <Tabs defaultActiveKey="1" tabPosition="left" tabBarGutter>
          <TabPane tab="About" key="1">
            <AboutGame />
          </TabPane>
          <TabPane tab="Summon PassionRobos" key="2">
            Summon PassionRobos
          </TabPane>
          <TabPane tab="View Tournaments" key="3">
            View Tournaments
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default GameDashboard
