import React, {Component} from "react";
import { List, Card } from 'antd';

const data = [
    {
        title: 'Flood',
    },
    {
        title: 'Earthquake',
    },
    {
        title: 'Cyclone',
    },
    {
        title: 'Avalanche',
    },
];

class VictimPage extends Component {

    render() {
        return (
            <div>
                <h4> Help tell us what you need and have volunteers reach out to you! </h4>

                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>Click to get help</Card>
                        </List.Item>
                    )}
                />

            </div>
        )
    }
}
export default VictimPage