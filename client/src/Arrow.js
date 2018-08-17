import React, { Component } from 'react';
import ReactSVG from 'react-svg';

export default class Arrow extends Component {
    constructor(props) {
      super(props)
      this.state = {click:false};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      if (!this.state.click) {
        //panelChange(this.props.dir);
        this.props.go(this.props.dir);
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