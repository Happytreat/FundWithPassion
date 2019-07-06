import React, {Component} from "react";
import { List, Card } from 'antd';
import Button from "antd/es/button";

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
    constructor() {
        super();
        this.state = { showForm: false }
    }

    _showForm = (bool) => {
        this.setState({
            showForm: bool
        });
    }

    render() {
        return (
            <div>
                <h4> Help tell us what you need and have volunteers reach out to you! </h4>

                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title} >
                                <Button onClick={this._showForm.bind(null, true)}>
                                    Click to get help
                                </Button>
                            </Card>

                        </List.Item>
                    )}
                />

                {
                    this.state.showForm && (<div>
                        <h3> Fill in the form below </h3>
                    </div>)
                }
            </div>
        )
    }
}
export default VictimPage