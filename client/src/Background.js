import React, { Component } from 'react';
import setRandomInterval from 'set-random-interval';
const _ = require('lodash');
const random = require("random-js")();
function unMount(index){
    let cClouds = this.state.clouds
    for (let i = 0; i < 10; i++) {
        if (index == cClouds[i].key) {
            cClouds.splice(i,1);
            break;
        }
    }    
    this.setState({clouds:cClouds});
}
export default class Background extends Component {
    constructor(props)  {
        super(props)
        this.state = {pos: [], degree:-90, 
            top: 80 +'%', clouds:[]}    
        unMount = unMount.bind(this);
    }    
    componentDidMount() {
        const width = window.innerWidth;
        console.log(width);
        const bounds = [];
        const pos = [];
        const top = [];
        const currentClouds = []
        if (width > 800) {            
            bounds.push(0);
            for (let i = 0; i < 3; i++)  {
                bounds.push(Math.floor((width-200) * (i + 1)/ 3));
                pos.push(random.integer(bounds[i],bounds[i+1])-200)
                top.push(random.integer(70, 95) + '%');
            }          
        }
        else {
            bounds.push(0);
            for (let i = 0; i < 2; i++)  {
                bounds.push(Math.floor((width-100) * (i + 1)/ 3));
                pos.push(random.integer(bounds[i],bounds[i+1])-200)
                top.push(random.integer(70, 95) + '%');
            }     
        }        
        this.setState({pos:pos, top:top});
        for (let i = 0; i < pos.length; i++) {
            setRandomInterval(()=>{
                top[i] = random.integer(70, 95) + '%'
                this.setState({top:top})
            },2000, 5000);
        }        
        for (let i = 0; i < pos.length; i++) {
            setRandomInterval(()=>{
                pos[i] = pos[i] + random.integer(-20,20);
                this.setState({pos:pos});
            },2000, 5000);
        }  
        for (let i = 0; i < 10; i++){
            let z = random.real(0.2, 2);
            //let size = random.read()
            let key = random.real(1,100)*((i+1)*random.real(1,500))
            let c =random.integer(1, 8);
            let pos = random.integer(0, 100) +'%'
            currentClouds.push({key:key,c:c,left:pos,z:z})
        }
        this.setState({clouds:currentClouds});
        console.log(currentClouds);
        
        setRandomInterval(()=>{            
            if (this.state.clouds.length < 10) {                
                let z = random.real(0.2, 2);
                let key = random.real(1,100)*((random.real(1,10))*random.real(1,500))
                let c =random.integer(1, 8);
                let pos = random.integer(0, 100) +'%'
                let cCloud = this.state.clouds;
                cCloud.push({key:key,c:c,left:pos,z:z})
                this.setState({clouds:cCloud})
            }
        },10,100)
    }
    render () {
        const arrows = []
        for (let i = 0; i < this.state.pos.length; i++){
            arrows.push(<Arrows key={i}src = {require('./photos/dArrow.png')} 
             styles={{left:this.state.pos[i], top:this.state.top[i]}}/>)
        }
        const clouds = []
        for (let i = 0; i < this.state.clouds.length;i++){
            let cCloud = this.state.clouds[i];
            clouds.push(<Clouds c={cCloud.c}
            key ={cCloud.key} index = {cCloud.key}
            style={{left:cCloud.left}} z={cCloud.z}/>)
        }
        return (
            <div id='backgroundc'>
                {arrows}
                {clouds}
            </div>
        )
    }
}

class Arrows extends Component {
    render () {
        return (
            <img className={'Arrow'} 
            src={this.props.src} 
            alt =''
            style={this.props.styles}/>
        )
    }
}

const clouds = []
for (let i = 0; i < 7; i++) {
    //console.log('cloud'+(i+1)+'.png')
    clouds.push(require('./photos/cloud'+(i+1)+'.png'));
}
class Clouds extends Component {
    constructor(props) {
        super(props);
        this.state = {c:this.props.c, style: {left:-1000}, o:this.props.style, top:0, timer:0};
    }
    componentDidMount() {
        this.setState({top: -30, 
            o:_.merge(this.state.o,{width:200*this.props.z, zIndex:Math.ceil(this.props.z)})})
        var x = setInterval(()=>{
            let top = this.state.top
            if (top > 130) {
                unMount(this.props.index);            
            }
            else {
                top+=0.5 * this.props.z;
                let style = {};
                style['top'] = top + '%';                        
                this.setState({style:_.merge(style,this.state.o), top:top});                
            }
            
        },1000/20)
        this.setState({timer:x});
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (        
            <img className='clouds'
            src={clouds[this.state.c]} alt =''
            style={this.state.style}/>                
        )
    }
}