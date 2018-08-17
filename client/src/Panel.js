import React, { Component } from 'react';
import Box from './Box.js';
import Gallery from './Gallery.js';

export default class Panel extends Component {
    render (){
      const {data} = this.props;
      let x = this.props.pos[0];
      let y = this.props.pos[1];
      let f = 0;
      switch (data[x][y].type) {
        case 'Gallery':
        f = <Gallery key = {y} desc = {Object.keys(this.props.data[x][y])[2]}/>
  
        break;
        default:
        f = <div>NA, In construction...</div>
      }
      return (
        <div id = 'panel'>
          {f}
          <Box pos = {this.props.pos}/>
        </div>
      )
    }
  }