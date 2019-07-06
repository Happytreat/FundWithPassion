import React from 'react'
import { Badge, Avatar, Typography, Card, Icon, Input } from 'antd'

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
		<Card
			style={{ width: 300 }}
			cover={
			<img
				alt="flood victim"
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
		<br/>
		<Card
			style={{ width: 300 }}
			cover={
			<img
				alt="flood victim"
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
)
