import React, { Component } from 'react';
import {CSSTransitionGroup} from "react-transition-group";
import ReactSVG from 'react-svg';
import Gallery from './Gallery.js';
import Box from './Box.js';
const data = require('./static/data');
const _ = require('lodash');

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
    default:
      return;
  }
  this.setState({position:pos, dir:dir});
}
function posChange(pos) {
  this.setState({position:pos, dir:'jump'});
  return;
}
class App extends Component {
  constructor (props) {
    super(props);
    if (this.props.pos!==null) {
      this.state = {position: this.props.pos, dir:''};
    }
    else {
      this.state = {position: [0,0], dir:''};
    }
    panelChange = panelChange.bind(this);
    posChange = posChange.bind(this);
  }
  render() {
    let x = this.state.position[0];
    let y = this.state.position[1];
    let trans = this.state.dir;
    let tItem = items[x][y];
    let possible = [1,1,1,1];
    if (boundY[x] === 1) {
      possible[0] = 0
      possible[1] = 0
    }
    if (y !== 0) {
      possible[2] = 0
      possible[3] = 0
    }
    let dArrow = []
    for (let i = 0; i < 4; i++) {
      if (possible[i]===1)
        dArrow.push(arrows[i]);
    }
    /**/
    return (
      <div id='app'>
        <div id="panelframe">

          <CSSTransitionGroup
            transitionName={trans}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={1000}>
            {tItem}
          </CSSTransitionGroup>
          {dArrow}

        </div>
        <Jump/>


      </div>
    );
  }
}
class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = {click:false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!this.state.click) {
      panelChange(this.props.dir);
      this.setState({click:true});
      setTimeout(()=>{
        this.setState({click:false})
      },500);
    }
    else {
      return;
    }    
  }
  render () {

    return (
      <ReactSVG id={this.props.dir} svgClassName = {this.props.dir}
        onClick={this.handleClick}
        path = {require('./photos/arrow.svg')}
      />
        //  <ReactSVG path='/gallery/arrow.svg' id = {this.props.dir} onClick={this.handleClick}/>
    )
  }
}

class Panel extends Component {
  render (){
    let x = this.props.pos[0];
    let y = this.props.pos[1];
    let f = 0;
    switch (data[x][y].type) {
      case 'Gallery':
      f = <Gallery key = {y} src = {data[x][y].src} desc = {''}/>

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

class Jump extends Component {
  render () {
    return (
      <div id='jump'>
        <Info name={'Execs'} pos={[0,0]}/>
        <Info name={'Gallery'} pos={[1,0]}/>
        <Info name={'Other'} pos={[3,0]}/>
        <Info name={'Info'} pos={[2,0]}/>
      </div>
    )
  }
}
class Info extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    posChange(this.props.pos);
  }
  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  }
}
const boundX = _.keys(data).length;
const boundY = new Array(boundX);
for (let i = 0; i < boundX;i++) {
  boundY[i] = _.keys(data[i]).length;
}
console.log (boundX)
console.log(boundY)

const arrows = new Array(4);
const directions = ["N","S","E","W"]
for (let i = 0; i < 4; i++) {
  arrows[i] = <Arrow key={i} dir = {directions[i]}/>
}
const items = new Array(boundX);
for (let i = 0; i < boundX; i++) {
  items[i] = new Array (_.max(boundY))
}
for (let i = 0; i < boundX;i ++){
  for (let j = 0; j < boundY[i];j++){
    items[i][j] = <Panel key={i*_.max(boundY) + j} pos = {[i,j]} />;
  }
}

export default App;
