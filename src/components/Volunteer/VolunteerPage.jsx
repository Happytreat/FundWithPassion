import React from 'react'
import { List, Avatar, Typography, Card, Icon, Input } from 'antd'
import './VolunteerPage.css'

// Images
import flood from "../../assets/floodtrump.jfif"
import profile from "../../assets/profile.jfif"
import earthquake from "../../assets/earthquake.jpeg"

// This is just a sample template. Please change logo! This logo is already used!
// TODO: Shift material ui grid to antd Row and Col

const { Meta } = Card;
const { Search } = Input;

const images = ["https://assets.rappler.com/0F3B0AA1405B4FAFBC7A6D7A44C0E92B/img/62ACDFE84A054394B72B135043299AE4/IMG_9383_62ACDFE84A054394B72B135043299AE4.jpg",
"https://assets.rappler.com/0F3B0AA1405B4FAFBC7A6D7A44C0E92B/img/62ACDFE84A054394B72B135043299AE4/IMG_9383_62ACDFE84A054394B72B135043299AE4.jpg"]
const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: '',
    title: `Victim ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
    	`Location: xxx`,
    content:
		`Victim ${i} story Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ButtonSize extends React.Component {
	state = {
	  size: 'large',
	};
  
	handleSizeChange = e => {
	//   this.setState({ size: e.target.value });
	};
}

export const VolunteerPage = () => (
	<div>
		<Search placeholder="Search by location, cause or name" onSearch={value => console.log(value)} enterButton />
		<br/>
		<br/>
		{/* <div class="row">
			<div class="column">
				<Card
					style={{ width: 300 }}
					cover={
					<img
						alt="flood"
						src= { flood }
					/>
					}
					actions={[<a href = "/Volunteer"><Icon type="heart" /></a>,
					<a href = "/Volunteer"><Icon type="dollar" /></a>]}
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
						src= "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/05/bodies-of-pompeii.png"
						// src = "https://previews.123rf.com/images/gelpi/gelpi1206/gelpi120600074/14018505-fat-man-drinking-a-jar-of-beer-isolated-on-white-background.jpg"
					/>
					}
					actions={[<Icon type="heart" />, <a href = ''><Icon type="dollar" /></a>]}
				>
					<Meta
						avatar={<Avatar src={ profile }  />}
						title="Volcano Victim 1"
						description="This is the description"
					/>
				</Card>
			</div>
		</div> */}

		<List
			itemLayout="vertical"
			size="large"
			pagination={{
			onChange: page => {
				console.log(page);
			},
			pageSize: 3,
			}}
			dataSource={listData}
			footer={
			<div>
				
			</div>
			}
			renderItem={item => (
			<List.Item
				key={item.title}
				actions={[
					<IconText type="star-o" text="156" />,
					<IconText type="like-o" text="156" />,
					<IconText type="message" text="2" />,
				]}
				actions={[<a href = "https://www.google.com"><IconText type="heart" text="Volunteer" /></a>,
					<a href = "https://www.yahoo.com"><IconText type="dollar" text="Donate" /></a>]}
				extra={
				<img
					width={272}
					alt="logo"
					src= "https://assets.rappler.com/0F3B0AA1405B4FAFBC7A6D7A44C0E92B/img/62ACDFE84A054394B72B135043299AE4/IMG_9383_62ACDFE84A054394B72B135043299AE4.jpg"
				/>
				}
			>
				<List.Item.Meta
					avatar={<Avatar src={item.avatar} />}
					title={<a href={item.href}>{item.title}</a>}
					description={item.description}
				/>
				{item.content}
			</List.Item>
			)}
		/>,
		
	</div>
)
