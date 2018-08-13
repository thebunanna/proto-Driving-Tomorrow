import React, { Component } from 'react';

export default class Redirect extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location = "/App"
  }
  render() {
    return (
      <div>
        <h1>Texas Academy of Math and Science</h1>
        <div class='title'>Driving Tommorow</div>
        <div class='about'>
          Driving Tomorrow is a non-profit student-led organization at the Texas Academy of Mathematics and Science (TAMS), an early entrance college program at the University of North Texas (UNT).
          The HOPE committee was founded in May 2017 to unite the TAMS and UNT communities towards assisting disadvantaged areas.
          We aim to provide meaningful community service projects and volunteering opportunities that create long-term impacts on the regions we serve.
          This goal includes providing resources to organizations and people who cannot afford them otherwise.
          Through organizing various supply drives at UNT, Driving Tomorrow has  provided resources and relief to elementary school students, Hurricane Harvey victims, homeless shelters, domestic abuse shelters, afterschool programs, and more.
          Additionally, Driving Tomorrow has provided numerous volunteering opportunities to the TAMS/UNT population.
        </div>
        <div class='enterb' onClick={this.handleClick}>Enter</div>
      </div>
        )
    }
}
