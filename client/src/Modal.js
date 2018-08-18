import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';
import _ from 'lodash';
import Lightbox from 'react-images';

class Modal extends Component {
    constructor (props) {
        super (props);
        const {data, name} = this.props
        for (let x in data[1]) {
            console.log(x)
            if (x === 0) {
                continue;
            }
            console.log (_.has(data[1][x], name))   
            if (_.has(data[1][x], name)){
                const images = []
                _.forIn(data[1][x][name], (val)=> {
                    images.push({src:require('./gallery/'+name +'/'+val)})
                })
                this.state = {pos:0, images:images}                   
            }
            /*
            let index = _.findIndex(_.keys(data[1][x]), (val) => {
                return val == name;
            })
            if (index !== 0) {
                this.state = {pos:0, index:x}
            } */           
        }
        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleX = this.handleX.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
    }
    handleX() {
        this.props.actions.modalChange('');
    }
    //change react-images
    handleRight() {
        let size = this.state.images.length;
        let pos = this.state.pos
        if (pos+1 === size) {
            pos=0
        }
        else {
            pos+=1
        }
        this.setState({pos:pos})
    }
    handleLeft() {
        let size = this.state.images.length;
        let pos = this.state.pos
        if (pos+1 === 0) {
            pos= size-1
        }
        else {
            pos-=1
        }
        this.setState({pos:pos})
    }
    gotoImage (index) {
		this.setState({
			pos: index,
		});
	}
    render () {
        const {pos, images} = this.state;
        
        return (
            <Lightbox 
                currentImage={pos}
                images={images}
                isOpen={true}
                onClose={this.handleX}
                onClickPrev={this.handleLeft}
                onClickNext={this.handleRight}
                showThumbnails={true}
                onClickThumbnail={this.gotoImage}
            />
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
