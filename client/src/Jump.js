import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'
class Jump extends Component {
    render () {
        let titles = ['Execs','Gallery','Info','Other'];
        const info = titles.map((val, index)=>{
            return <Info key={val} name={val} pos={[index,0]} change={this.props.actions.posChange}/>
        })        
        return (
            <div id='jumpcontainer'>
                <div id='jump'>
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
        <div onClick={this.handleClick}>
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
