import React, { Component } from 'react';
import {CSSTransitionGroup} from "react-transition-group";
import Arrow from './Arrow.js'
import Panel from './Panel.js'
import Jump from './Jump.js'
import Modal from './Modal.js'
import Up from './Up.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'
import _ from 'lodash'

class App extends Component {  
  componentDidMount() {
    window.onscroll = this.onScroll.bind(this);
  }
  onScroll () {
    if (document.documentElement.scrollTop > 40) {
      this.props.actions.toggleJump(true);
    }
    else {
      this.props.actions.toggleJump(false);
    }
  } 
  render() {
    const {boundY, jump, pos, name} = this.props;
    let x = pos[0];
    let tItem = []
    //let trans = dir[dir.length-1];    
    for (let y = 0; y < boundY[x]; y++) {
        tItem.push(<Panel key={x*_.max(boundY) + y} pos = {[x,y]} data ={this.props.data}/>)
    }
    let possible = [0,0,1,1]
    let dArrow = []
    const directions = ["N","S","E","W"]
    const arrows = directions.map((value)=>{
      return <Arrow key={value} dir={value} go={this.props.actions.changeDir}/>
    })
    for (let i = 0; i < 4; i++) {
      if (possible[i]===1)
        dArrow.push(arrows[i]);
    }
    let modal = <Modal/>;
    let up = <Up />;
    /**/
    return (
      <div id='app'>
        {name !== '' ? modal: null}
        {jump ? up:null}
        <Jump/>
        <div id="panelframe">

          <CSSTransitionGroup
            transitionName={'jump'}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={1000}>
            {tItem}
          </CSSTransitionGroup>
          {dArrow}

        </div>        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
