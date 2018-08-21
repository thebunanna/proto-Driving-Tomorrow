import React, { Component } from 'react';
import anime from 'animejs';
export default class Up extends Component {
    constructor(props){
        super(props);
        this.goUp = this.goUp.bind(this);
    }
    goUp() {        
        let top = {top: document.documentElement.scrollTop};
        let timeline = anime.timeline();
        timeline.add({
            targets:top,
            top: 0,
            duration: 500,
            easing:'linear',
            round: 1,
            update: ()=>{                
                window.scrollTo(top)
            },
            offset:0
        }).add({
            targets:'#up',
            rotate: [0, 360],
            duration: 500,
            easing:'linear',
            offset:0            
        })                
    }
    render () {
        return (
            <div id='up' style={{display:this.props.jump}} onClick={this.goUp}>

            </div>
        )
    }
}

