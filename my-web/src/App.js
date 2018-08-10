import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const data = require('./static/data');
console.log(data);

const boundX = 4;
const boundY = [1, 2, 3, 4];
function cb (dir) {
  this.setState({ADir: dir});

}
function panelChange(dir) {
  let pos = this.state.position;
  switch (dir) {
    case 'N':
      if (pos[1]===boundY[pos[0]]-1) {
        pos[1] = 0
      }
      else {
        pos[1]+=1
      }
      break
    case 'S':
      if (pos[1]===0) {
        pos[1] = boundY[pos[0]]-1
      }
      else {
        pos[1]-=1
      }
      break;
    case 'E':
      if (pos[0] === boundX - 1) {
        pos[0] = 0
      }
      else {
        pos[0]+=1
      }

      break;
    case 'W':
      if (pos[0] === 0) {
        pos[0] = boundX - 1
      }
      else {
        pos[0]-=1
      }
      break;
  }
  this.setState({position:pos});
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {position: [0,0]};
    panelChange = panelChange.bind(this);
  }
  render() {
    return (
      <div id="panel">
        <Panel id="top" pos = {this.state.position}/>

      </div>
    );
  }
}

class Panel extends Component {
  constructor(props) {
    super(props);
    //this.state = {pos:this.props.pos}
    this.handleClick = this.handleClick.bind(this);
    cb = cb.bind(this);
  }

  handleClick() {
    // Do something
  }
  render (){
    return (
    <div>
      <Box pos = {this.props.pos}/>
      <Arrow dir = 'N'/>
      <Arrow dir = 'S'/>
      <Arrow dir = 'E'/>
      <Arrow dir = 'W'/>
    </div>
    )
  }
}
class Box extends Component {
  render () {
    return (
      <p>{data[this.props.pos[0]][this.props.pos[1]].text}</p>
    )
  }
}
class Arrow extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    panelChange(this.props.dir);
    cb(this.props.dir)
  }
  render () {
    return (
      <button id = {this.props.dir} onClick={this.handleClick}>{this.props.dir}</button>
    )
  }
}
export default App;
