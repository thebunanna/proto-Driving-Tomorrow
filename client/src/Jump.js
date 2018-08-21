import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'
import Img from 'react-image';
class Jump extends Component {    
    render () {
        let titles = ['Execs','Gallery','Info','Other'];
        const info = titles.map((val, index)=>{
            let style = {}
            if (index===this.props.pos[0]) {
                style = {borderBottom: '4px solid rgb(227, 253, 245)', opacity: 1}
            }
            return <Info key={val} name={val} pos={[index,0]} style={style} change={this.props.actions.posChange}/>
        })        
        return (
            <div id={'jumpcontainer'}>   
                <Img src={require('./photos/drivingtmrw.png')} id='thumb'/>
                <div id={'jump'}>
                    {info}                    
                </div>                                                                
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
      this.props.change(this.props.pos);
    }
    render () {
      return (
        <div onClick={this.handleClick} style={this.props.style}>
          {this.props.name}
        </div>
      )
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
export default connect(mapStateToProps, mapDispatchToProps)(Jump)
