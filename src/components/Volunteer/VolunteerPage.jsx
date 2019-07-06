import React from 'react'
import { Badge, Avatar, Typography, Card, Icon, Input } from 'antd'
import './VolunteerPage.css'

// Images
import flood from "../../assets/floodtrump.jfif"
import profile from "../../assets/profile.jfif"
import earthquake from "../../assets/earthquake.jpeg"

// This is just a sample template. Please change logo! This logo is already used!
// TODO: Shift material ui grid to antd Row and Col
const { Meta } = Card;
const { Search } = Input;

export const VolunteerPage = () => (
	<div>
		<Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
		<br/>
		<br/>
		<div class="row">
			<div class="column">
				<Card
					style={{ width: 300 }}
					cover={
					<img
						alt="flood"
						src= { flood }
					/>
					}
					actions={[<a href = "https://www.google.com"><Icon type="heart" /></a>,
					<a href = "https://www.yahoo.com"><Icon type="dollar" /></a>]}
				>
					<Meta
						avatar={<Avatar src={ profile } />}
						title="Flood Victim 1"
						description="This is the description"
					/>
				</Card>
			</div>
			<div class="column">
				<Card
					style={{ width: 300 }}
					cover={
					<img
						alt="earthquake"
						src= { earthquake }
					/>
					}
					actions={[<Icon type="heart" />, <Icon type="dollar" />]}
				>
					<Meta
						avatar={<Avatar src={ profile }  />}
						title="Earthquake Victim 1"
						description="This is the description"
					/>
				</Card>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="column">
				<Card
					style={{ width: 300 }}
					cover={
					<img
						alt="typhoon"
						src= "https://assets.rappler.com/0F3B0AA1405B4FAFBC7A6D7A44C0E92B/img/62ACDFE84A054394B72B135043299AE4/IMG_9383_62ACDFE84A054394B72B135043299AE4.jpg"
					/>
					}
					actions={[<a href = "https://www.google.com"><Icon type="heart" /></a>,
					<a href = "https://www.yahoo.com"><Icon type="dollar" /></a>]}
				>
					<Meta
						avatar={<Avatar src={ profile } />}
						title="Typhoon Victim 1"
						description="This is the description"
					/>
				</Card>
			</div>
			<div class="column">
				<Card
					style={{ width: 300 }}
					cover={
					<img
						alt="volcano"
						//src= "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/05/bodies-of-pompeii.png"
						src = "https://previews.123rf.com/images/gelpi/gelpi1206/gelpi120600074/14018505-fat-man-drinking-a-jar-of-beer-isolated-on-white-background.jpg"
					/>
					}
					actions={[<Icon type="heart" />, <a href = "https://www.youtube.com/watch?v=gXge6td1jfM"><Icon type="dollar" /></a>]}
				>
					<Meta
						avatar={<Avatar src={ profile }  />}
						title="Macdonalds Victim 1"
						description="This is the description"
					/>
				</Card>
			</div>
		</div>
		
	</div>
)
