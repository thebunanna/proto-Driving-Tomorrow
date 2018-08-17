import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'

class Modal extends Component {
    constructor (props) {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';        
        super (props);
        this.state = {pos:0}
        this.handleX = this.handleX.bind(this);
    }
    handleX() {
        this.props.actions.modalChange('');
    }
    render () {
        return (
        <div className={'modal'}>
            <div>{this.props.name}</div>
            <button onClick={this.handleX}/>
        </div>)
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
