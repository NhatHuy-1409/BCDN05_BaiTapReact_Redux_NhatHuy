import keo from '../../asset/image/keo.png'
import bua from '../../asset/image/bua.png'
import bao from '../../asset/image/bao.png'
let gameOanTuTi = {
    soBanThang: 0,
    soBanChoi: 0,
    actionPlayer: keo,
    actionPlayerCom: keo
}
export const gameOanTuTiReducer = (state = gameOanTuTi, action) => {
    switch (action.type) {
        case 'SELECT_ACTION': {
            let act = action.act
            if (act === 'keo') { state.actionPlayer = keo }
            if (act === 'bua') { state.actionPlayer = bua }
            if (act === 'bao') { state.actionPlayer = bao }
            return { ...state }
        }
        case 'PLAY_GAME': {
            let numberRandom = Math.floor(Math.random() * 3)
            if (numberRandom === 0) {
                state.actionPlayerCom = keo
                if (state.actionPlayer === bua) {
                    state.soBanThang += 1;
                }
            }
            if (numberRandom === 1) {
                state.actionPlayerCom = bua
                if (state.actionPlayer === bao) {
                    state.soBanThang += 1;
                }
            }
            if (numberRandom === 2) {
                state.actionPlayerCom = bao
                if (state.actionPlayer === keo) {
                    state.soBanThang += 1;
                }
            }
            state.soBanChoi += 1
            return { ...state }
        }
        default: return state
    }
}