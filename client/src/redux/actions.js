import {CHANGE_DIR, POS_CHANGE, MODAL_CHANGE, TOGGLE_JUMP} from './constants.js'

let actions = {
    changeDir: function(dir) {

        return  {
            type: CHANGE_DIR,
            dir: dir
        }
    },
    posChange: function (pos) {
        return {
            type: POS_CHANGE,
            pos: pos
        }
    },
    modalChange: function (name) {
        return {
            type: MODAL_CHANGE,
            name: name
        }
    },
    toggleJump: function (toggle) {
        return {
            type: TOGGLE_JUMP,
            toggle: toggle
        }
    }
}
export default actions