import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button, Tabs, PageHeader, Divider, Carousel, Input } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Logo } from '../Logo';
import { Home } from '../Home';
import { VolunteerPage } from './VolunteerPage' ;
import VictimPage from "../VictimPage";
const { TabPane } = Tabs;



const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class VolSignBkgd extends Component {
	render() {
		return (
      <div style={{ padding: '10px', leftMargin: '50px' }}>
				<PageHeader>
					<Logo />
					<Divider />
					<Tabs defaultActiveKey="3" tabPosition="left" tabBarGutter>
						<TabPane tab="Home" key="1">
							<Home />
						</TabPane>
						<TabPane tab="Ask for help" key="2">
							<Route exact path="/" component={VictimPage} />
						</TabPane>
						<TabPane tab="Give or volunteer" key="3">
							<h1>Victim 0</h1>
              <h2>Help the flooded homelesses</h2>
              This activity is done to help a person who suffered from the earthquake and he has lost his family in it.<br/>
              How much are you willing to help him?<br/>
              <br/>
              <br/>
              $&nbsp;<Input placeholder="0.00" style={{ width: '100px' }} /> <br/>
              <br/>
              <br/>
              By taking in the amount of money, if you win the game, you will be able to get back the bid that the other donator 
              has offered to the beneficiary<br/>
              <br />
              <br />
                <Popup  trigger={<Button type="primary" size={360}>Pay and start the challenge!</Button>} modal contentStyle={contentStyle} >
                {close => (
                  <div className="modal">
                    <div className="header"> <h2><center>Payment Successful</center></h2> </div>
                    <div className="content">
                      <br/>
                      {" "}
                      You may procced to making donation to another person/group of people in need.😊
                      <br />
                      Or else, why not have a friendly match with the other fellow donors? Have fun while spread your kindness!
                    </div>
                    <center>
                    <a href="../Game"><Button type="primary" size={360}> YES! </Button></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/"><Button size={360}> NO </Button></a>
                    </center>
                  </div>
                )}
                </Popup>
                
              {/* Pay and start the challenge! </Button>*/}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href = "/"><Button size={360}>Cancel</Button></a>
      
						</TabPane>
						<TabPane tab="Join Us" key="4">
							Join our team
						</TabPane>
						<TabPane tab="Leave feedback" key="5">
							Leave feedback
						</TabPane>
						<TabPane tab="Leave" key="6">
						</TabPane>
					</Tabs>
				</PageHeader>

			</div>
		)
	}
}

export default VolSignBkgd
