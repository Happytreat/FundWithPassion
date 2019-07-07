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
		<Button type="dashed">Submit</Button>

		<br/>
		<font size = "5" > Frequently Asked questions </font>
		<br />

		<h4/> <b>Q. How will I know if my money is put to good use? </b>
		<p/>A. We will keep you posted through our social media and e-mail newsletter about the changes we make and people we affect!
		<br />
		<h4/> <b> Q. Do I have to take part in the game? </b>
		<p/>A. No! Feel free to directly donate to our beneficiaries through our platform!
		<br />
	</div>
)

