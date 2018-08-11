import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'
const _ = require('lodash');
const path = require('path');
const async = require ('async')

const data = require('./static/data');

/*
async.series([
  function getPhotos(step) {
    fs.readdir("static", (err, files) => {
    if (err) {console.log ("wut")};
    for (let x = 0;x < files.length;x++ ){
        console.log(files[x]);
        //const command = require(path.join(__dirname, "commands", files[x]));
        //bot.commands.set(command.name, command);
    };
    step()
    });
  }
])*/
const boundX = 4;
const boundY = [1, 2, 3, 4];

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
      if (pos[1] !== 0) {
        return
      }
      if (pos[0] === boundX - 1) {
        pos[0] = 0
      }
      else {
        pos[0]+=1
      }
      break;
    case 'W':
      if (pos[1] !== 0) {
        return
      }
      if (pos[0] === 0) {
        pos[0] = boundX - 1
      }
      else {
        pos[0]-=1
      }
      break;
  }
  this.setState({position:pos, dir:dir});
}
class Panel extends Component {
  constructor(props) {
    super(props);
    //this.state = {pos:this.props.pos}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Do something
  }
  render (){
    return (
    <div id = 'panel'>
      <Box pos = {this.props.pos}/>

    </div>
    )
  }
}
class Box extends Component {
  render () {
    return (
      <div>{this.props.pos}</div>
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
  }
  render () {
    return (
      <img id = {this.props.dir} onClick={this.handleClick} src='arrow.svg'/>
    )
  }
}
const items = new Array(boundX);
for (let i = 0; i < boundX; i++) {
  items[i] = new Array (_.max(boundY))
}
for (let i = 0; i < boundX;i ++){
  for (let j = 0; j < boundY[i];j++){
    items[i][j] = <Panel pos = {[i,j]} key={i*_.max(boundY) + j}/>
  }
}
console.log(items)

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {position: [0,0], dir:''};
    panelChange = panelChange.bind(this);
  }
  render() {
    let trans = this.state.dir;
    let tItem = items[this.state.position[0]][this.state.position[1]];

    return (
      <div id="panelframe">
        <CSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {tItem}
        </CSSTransitionGroup>
        <Arrow dir = 'N'/>
        <Arrow dir = 'S'/>
        <Arrow dir = 'E'/>
        <Arrow dir = 'W'/>
      </div>
    );
  }
}


export default App;
