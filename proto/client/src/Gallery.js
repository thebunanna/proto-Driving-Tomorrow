import React, {Component} from 'react';
class Gallery extends Component {
  render() {
    return(
        <img id='gpic' src={require('./gallery/' + this.props.src)} alt = 'Loading'/>
    )
  }
}
export default Gallery;
