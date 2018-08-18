import React, {Component} from 'react';
import actions from './redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Img from 'react-image';
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
    let src = require('./gallery/'+this.props.desc+'/'+this.props.data[1][this.props.y][this.props.desc][0])
    return(
      <div className="gallerycontainer">
        <div className="galleryT">{this.props.desc}</div>
        <Img src={src} id={'gpic'} onClick={this.handleClick}/>
        <div className="galleryT">Click On the Picture Above</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
