import React, {Component} from 'react';
import Img from 'react-image';
import actions from './redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Gallery extends Component {
  constructor(props) {
    super (props);
    this.state = {on: false}
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() {  
    this.props.actions.modalChange(this.props.desc);    
  }
  render() {
    //let item= <div className='loader'></div>   
    return(
      <button onClick={this.handleClick}>{this.props.desc}</button>
      //<Img id='gpic' src={this.props.src} loader={item} decode={false}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
