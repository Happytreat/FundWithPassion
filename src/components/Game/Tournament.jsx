import React from 'react'
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Tournament Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Price Pool',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Beneficiary Group',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = (tag === 'Started') ? 'geekblue' : 'green';
          if (tag === 'Ended') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Find out more</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Circle life',
    price: 3000,
    group: 'Typhoon Hane Victims',
    tags: ['Started'],
    action: ''
  },
  {
    key: '2',
    name: 'Support Life',
    price: 5000,
    group: 'Indonesia Wild Fire Remedy',
    tags: ['Ended'],
    action: ''
  },
  {
    key: '3',
    name: 'Build House Live On',
    price: 500,
    group: 'Earthquake Tokyo',
    tags: ['Preparing'],
    action: ''
  },
];

const Tournament = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
};

export default Tournament;
