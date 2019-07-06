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
						src="https://robohash.org/robobest"
						alt="logo"
						style={{ width: 60, height: 50, paddingRight: 10, display: 'inline' }}
					/>
					<h4 style={{ fontWeight: 700, display: 'inline' }}>Crowdsourced Fund Relief</h4>
				</a>
			</Grid>
			<Grid item xs={2}>
				<Text level={4} strong>
					Hello Helpers!{' '}
				</Text>
				{'      '}
				<Badge count={3} style={{ paddingLeft: '5%' }}>
					<Avatar src={Display} style={{ height: 50, width: 50 }} />
				</Badge>
			</Grid>
		</Grid>
	</div>
)
