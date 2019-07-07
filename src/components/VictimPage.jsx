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


    constructor () {
        super()
        this.state = {
            showForm: false ,
            formControls: {
                item: {
                    value: 'enter resource needed'
                },
                name: {
                    value: 'your name'
                },
                address: {
                    value: 'place to deliver'
                },
                quantity: {
                    value: 1
                }
            }
        }

    }

    _showForm = (bool) => {
        this.setState({
            showForm: bool,
        });
    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                [name]: value
            }
        });

    }

    handleSubmit(event) {
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
                                <Button onClick={this._showForm.bind(null, !this.state.showForm)}>
                                    Click to get help
                                </Button>
                            </Card>

                        </List.Item>
                    )}
                />

                {
                    this.state.showForm && (<div>
                        <h3> Fill in the form below: </h3>
                        <form onSubmit={this.handleSubmit}>
                            <p>
                            <label> Name:
                            <input type="text" name="name" value = {this.state.name} onChange={this.changeHandler} />
                            </label>
                            </p>
                            <p>
                            <label> Address:
                                <input type="text" name="address" value = {this.state.address} onChange={this.changeHandler} />
                            </label>
                            </p>
                            <p>
                            <label> Item:
                                <input type="text" name="item" value = {this.state.item} onChange={this.changeHandler} />
                            </label>
                            </p>
                            <p>
                            <label> Quantity:
                                <input type="text" name="quantity" value = {this.state.quantity} onChange={this.changeHandler} />
                            </label>
                            </p>
                            <p>
                            <input type="submit" value="Submit" />
                            </p>
                        </form>

                    </div>)
                }
            </div>
            
        )
    }
   
}
export default VictimPage