import React, {Component} from 'react';
const data = require('./static/data');
export default class Box extends Component {
  render () {
    return (
      <div>
        {data[this.props.pos[0]][this.props.pos[1]].type}
        <div>
          {this.props.pos}
        </div>
      </div>

    )
  }
}
