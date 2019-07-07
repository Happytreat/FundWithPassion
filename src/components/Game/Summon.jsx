import React, { Component } from 'react'
import { Image } from './Image'
import { Button } from 'antd'

class Summon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      amount: 50,
      error: ''
    };
  }

  render() {
    const { robots, amount, error } = this.state;

    const handleClick = () => {
      if (amount >= 10) {
        const hash = (Math.pow(10, 6) * Math.random()).toFixed(0);
        // console.log(`https://{robohash.org/${hash}`);
        const newR = robots;
        newR[robots.length] = `https://robohash.org/${hash}`;
        const newA = amount - 10;
        this.setState({robots: newR, amount: newA})
      } else {
        this.setState({ error: 'Not enough money to summon.' })
      }
    };
    const items = [];
    robots.forEach(r => items.push(<Image link={r} />));

    return (
      <div>
        <h1>
          Welcome to the summoning square.
        </h1>
        <h2>
          Summon your unique battle PassionRobos for only $10 which will be donated to a beneficiary of your choice.
        </h2>
        <Button onClick={handleClick} type="primary">Summon your unique PassionRobos here!</Button>
        <br />
        <br />
        <h3>
          Your wallet has ${amount}
        </h3>
        <br />
        {
          <p style={{color: 'red'}}>{error}</p>
        }
        <hr />
        {
          items
        }
      </div>
    )
  }
}

export default Summon;