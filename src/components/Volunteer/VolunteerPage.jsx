import React from 'react'
import { Badge, Avatar, Typography, Card, Icon } from 'antd'
import Button from 'react-bootstrap/Button';

// Images
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
			actions={[<Icon type="heart" />, <Icon type="dollar" />]}
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

		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	</div>
)
