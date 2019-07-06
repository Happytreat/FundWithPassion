import React from 'react'
import { Badge, Avatar, Typography } from 'antd'
import { Grid } from '@material-ui/core'
import Display from '../assets/bslogo.jpg'

const { Text } = Typography

// This is just a sample template. Please change logo! This logo is already used!
// TODO: Shift material ui grid to antd Row and Col
export const Logo = () => (
	<div>
		<Grid container justify="space-between" spacing={5}>
			<Grid item xs={10}>
				<a href="/">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvZK-QSYsgWyKU7Gc0wXrBLGeJV79lTd6-M0vBA4Q-GA-HUKiQg"
						alt="logo"
						style={{ width: 60, height: 80, paddingRight: 10, display: 'inline' }}
					/>
					<h1 style={{ fontWeight: 700, display: 'inline' }}>Fund with Passion</h1>
				</a>
			</Grid>
			<Grid item xs={2}>
				<Text level={4} strong>
					Hello Helpers!{' '}
				</Text>
				{'      '}
				<Badge count={3} style={{ paddingLeft: '5%' }}>
					<Avatar icon="user" />
				</Badge>
			</Grid>
		</Grid>
	</div>
)
