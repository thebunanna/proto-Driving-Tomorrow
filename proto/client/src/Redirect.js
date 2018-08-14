import React, { Component } from 'react';

export default class Redirect extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Anim />
      </div>
    )
  }
}
class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {status:'hide', grad:0, switch:false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location = "/App"
  }
  componentDidMount() {
    setTimeout(()=>{this.setState({status:'hide c'})}, 1000);
    setInterval(() => {
      if (this.state.grad < 1 && this.state.switch){
        this.setState({switch:false});
      }
      else if (this.state.grad > 99 && !this.state.switch) {
        this.setState({switch:true});
      }
      if (this.state.switch) {
        this.setState({grad:this.state.grad-1});
      }
      else {
        this.setState({grad:this.state.grad+1});
      }      
    }, 100);
  }
  render() {
    return (
      <div className='bar'>
        <div className={'apanel'}
         style={{background:
         'linear-gradient(45deg, rgba(129, 247, 255, 0.473) 0%,' + 
         'rgba(255, 255, 255, 1.0)'+ this.state.grad + '% , ' +
         'rgba(129, 247, 255, 0.473) 100%)'}}>
          <h1>Texas Academy of Math and Science</h1>
          <div className='title'>driving<b>Tommorow</b></div>
          <div  className='about'>      
            We aim to provide meaningful community service projects and volunteering opportunities that create long-term impacts on the regions we serve.
            This goal includes providing resources to organizations and people who cannot afford them otherwise.
            Through organizing various supply drives at UNT, Driving Tomorrow has  provided resources and relief to elementary school students, Hurricane Harvey victims, homeless shelters, domestic abuse shelters, afterschool programs, and more.
            Additionally, Driving Tomorrow has provided numerous volunteering opportunities to the TAMS/UNT population.
          </div>
          <div className='enterb' onClick={this.handleClick}>Enter</div>
          <a href="https://www.facebook.com/drivingtmrw/"className='fb'>FaceBook</a>

        </div>
        <div className={this.state.status}></div>
      </div>      
      )
    }
}
class Anim extends Component {
  constructor(props) {
    super(props);
    this.state = {changed:'', x:1, y:1, z:1, deg:45};
  }
  componentDidMount () {
    setInterval(()=>{      
      this.setState({changed: this.state.changed == '' ? ' y': ''})
    },4000);
    
  }
  handleRange = (id) => (e) => {
    switch (id) {
      case 'x':
      this.setState({x:e.target.value/50})
      break;
      case 'y':
      this.setState({y:e.target.value/50})
      break;
      case 'z':
      this.setState({z:e.target.value/50})
      break;
      case 'deg':
      this.setState({deg:e.target.value/10})
      default:      
      break;
    }
  }
  render() {
    let x = this.state.changed;
    return (
      <div>
        <div style={{display:'none'}}>
          <input id='f1' onChange={this.handleRange('x')} type='range' min='-100' max='100'></input>
          <input id='f2' onChange={this.handleRange('y')} type='range' min='-100' max='100'></input>
          <input id='f3'onChange={this.handleRange('z')} type='range' min='-100' max='100'></input>
          <input id='f4'onChange={this.handleRange('deg')} type='range' min='0' max='10'></input>
        </div>

        <div className={'box' + x}
         style={{transform: 'rotate3d('+
         this.state.x+','+
         this.state.y+','+
         this.state.z+','+
         this.state.deg +'turn)'}} >
          <div className='front'></div>
          <div className='back'></div>
          <div className='right'></div>
          <div className='left'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
    )
  }
}