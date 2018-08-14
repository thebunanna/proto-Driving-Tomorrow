import React, {Component} from 'react';
import Dimensions from 'react-dimensions'
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {left: 0, position:'absolute'};
    this.imgLoad = this.imgLoad.bind(this);
  }
  imgLoad({target: img}) {
    let src={require('./gallery/' + this.props.src)};
    let height = img.offsetHeight;
    let width = img.offsetWidth;
    this.setState((prevState, props)=>({left: this.props.containerWidth/2-width/2,
      top:this.props.containerHeight/2-height/2}));
  }
  render() {
    let h =  this.props.containerHeight;
    let w = this.props.containerWidth;
    return(
        <div id='gpic'key={h+w} alt = '' onLoad={this.imgLoad} style={this.state}/>
    )
  }
}
export default Dimensions()(Gallery);
