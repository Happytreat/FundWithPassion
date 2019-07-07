import React from 'react';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import { Comment, Avatar } from 'antd';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Slider, Icon } from 'antd';




function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Disaster Victim', 'Helper', 'General Question','Not urgent', 'Urgent'];
const options = [
  { label: 'Disaster Victim', value: 'Disaster Victim' },
  { label: 'Helper', value: 'Helper' },
  { label: 'General Question', value: 'General Question' },
  <br />,
  { label: 'Not urgent', value: 'Not urgent' },
  { label: 'Urgent', value: 'Urgent' },
];
const optionsWithDisabled = [
	{ label: 'Disaster Victim', value: 'Disaster Victim' },
	{ label: 'Helper', value: 'Helper' },
	{ label: 'General Question', value: 'General Question'},
	<br />,
	{ label: 'Not urgent', value: 'Not urgent' },
  	{ label: 'Urgent', value: 'Urgent',disabled: false },
  ];




export const Feedback = () => (
	<div>
		<font size = "5" > Feedback and Questions </font>
		<br />
		<br />
		
		<Checkbox.Group options={plainOptions} defaultValue={['Disaster victim']} onChange={onChange} />
		<br />
		<br />
		<Input placeholder="Write your feedback or questions here..."  />
		<br />
		<br />
		<div>
		<Button type="dashed">Submit</Button>
  	</div>,
		<font size = "5" > Frequently Asked questions </font>
		<br />
		1. How do I volunteer my services?
		<br />
		2. How do I donate?
		<br />
		3. How do I summon my passionrobos?
	</div>
)

