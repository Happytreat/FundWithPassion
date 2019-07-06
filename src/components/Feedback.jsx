import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { Input } from 'antd';


function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Disaster Victim', 'Helper', 'General Question'];
const options = [
  { label: 'Disaster Victim', value: 'Disaster Victim' },
  { label: 'Helper', value: 'Helper' },
  { label: 'General Question', value: 'General Question' },
];
const optionsWithDisabled = [
	{ label: 'Disaster Victim', value: 'Disaster Victim' },
	{ label: 'Helper', value: 'Helper' },
	{ label: 'General Question', value: 'General Question', disabled: false },
  ];


export const Feedback = () => (
	<div>
		<font size = "5" > Feedback and Questions </font>
		<br />
		<br />
		<Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
		<br />
		<br />
		<Input placeholder="Write your feedback or questions here..."  />
		<br />
		
	</div>
)

