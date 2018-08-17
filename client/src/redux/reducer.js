import {CHANGE_DIR, POS_CHANGE, MODAL_CHANGE} from './constants.js'
import update from 'immutability-helper';
let reducer = (state, action) => {
    switch (action.type) {
      case CHANGE_DIR:
        let pos = state.pos;
        switch (action.dir) {
          case 'N':
            if (pos[1]===state.boundY[pos[0]]-1) {
              pos[1] = 0
            }
            else {
              pos[1]+=1
            }
            break
          case 'S':
            if (pos[1]===0) {
              pos[1] = state.boundY[pos[0]]-1
            }
            else {
              pos[1]-=1
            }
            break;
          case 'E':
            if (pos[1] !== 0) {
              return
            }
            if (pos[0] === state.boundX - 1) {
              pos[0] = 0
            }
            else {
              pos[0]+=1
            }
            break;
          case 'W':
            if (pos[1] !== 0) {
              return
            }
            if (pos[0] === 0) {
              pos[0] = state.boundX - 1
            }
            else {
              pos[0]-=1
            }
            break;
          default:
            console.log("wut");
            return;
        }        
        return update(state, {dir: {$push: [action.dir]}, pos:{$set: pos}})
      case POS_CHANGE: 
        return update(state, {pos:{$set: action.pos}});
      case MODAL_CHANGE:
        return update(state, {name :{$set: action.name}})
      default:
        return state;
    }
  }
  export default reducer