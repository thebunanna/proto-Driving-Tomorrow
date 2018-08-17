import {CHANGE_DIR, POS_CHANGE, MODAL_CHANGE} from './constants.js'

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
    }
}
export default actions