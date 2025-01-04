import React, { Component } from 'react'
import About from './About.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <h1>Our Path to Success </h1>
        <p> - Sustainability: Highlights the use of bicycles for eco-friendly delivery.
          <br></br>
          - Environmental Focus: Emphasizes the commitment to reducing carbon footprint.
          <br></br>
          - Service Quality: Assures customers of fast and reliable delivery.
          <br></br>
          - Community Support: Mentions support for local businesses.
          <br></br>
          - Call to Action: Encourages customers to choose your service.</p>
        <img src={About} className='About.jpg'></img>
      </div>
    )
  }
}
