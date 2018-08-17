import React, {Component} from 'react';
import Img from 'react-image';
class Gallery extends Component {
  render() {
    let item= <div className='loader'></div>
   
    return(
      <Img id='gpic' src={this.props.src} loader={item} decode={false}/>
    )
  }
}
export default Gallery;
