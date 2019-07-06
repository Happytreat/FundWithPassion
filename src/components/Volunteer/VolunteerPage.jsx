import React from 'react'
import { Badge, Avatar, Typography, Card, Icon } from 'antd'
import flood from "../../assets/floodtrump.jfif"
import profile from "../../assets/profile.jfif"
import earthquake from "../../assets/earthquake.jpeg"

// This is just a sample template. Please change logo! This logo is already used!
// TODO: Shift material ui grid to antd Row and Col
const { Meta } = Card;

export const VolunteerPage = () => (
	<div>
		<Card
			style={{ width: 300 }}
			cover={
			<img
				alt="flood victim"
				src= { flood }
			/>
			}
			actions={[<Icon type="heart" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
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
			actions={[<Icon type="heart" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
		>
		<Meta
			avatar={<Avatar src={ profile }  />}
			title="Earthquake Victim 1"
			description="This is the description"
		/>
		</Card>,
	</div>
)
