import React, { Component } from 'react'
import { Image } from './Image'

class Summon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  render() {
    const { robots } = this.state;

    const handleClick = () => {
      const hash = (Math.pow(10, 6)*Math.random()).toFixed(0);
      // console.log(`https://{robohash.org/${hash}`);
      const newR = robots;
      newR[robots.length] = `https://robohash.org/${hash}`;
      this.setState({robots: newR})
    };
    const items = [];
    robots.forEach(r => items.push(<Image link={r} />));

    return (
      <div>
        <h1>
          Welcome to the summoning square.
        </h1>
        <h4>
          Summon your unique battle PassionRobos for only $10 which will be donated to a beneficiary of your choice.
        </h4>
        <button onClick={handleClick} type="primary">Summon your unique PassionRobos here!</button>
        <hr />
        {
          items
        }
      </div>
    )
  }
}

export default Summon;