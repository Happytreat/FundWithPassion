import React, { Component } from 'react'

class AboutGame extends Component {
  render() {
    return (
      <div>
        <h1>
          Game Rules
        </h1>
        <h4>
          <ol style={{ fontSize:'1.25rem' }}>
            <li>Summon a unique PassionRobo</li>
            <li>Join a tournament</li>
            <li>Choose a beneficiary to donate to</li>
            <li>FIGHT!</li>
          </ol>
        </h4>
      </div>
    )
  }
}

export default AboutGame;