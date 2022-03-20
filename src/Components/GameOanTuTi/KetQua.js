import React, { Component } from 'react'
import { connect } from 'react-redux';

class KetQua extends Component {
    render() {
        let { soBanThang, soBanChoi } = this.props.gameOanTuTi
        return (
            <div className="col-6 ketqua">
                <h1>I'm iron man, i love you 3000 !!</h1>
                <h2>Số bàn thắng: <span>{soBanThang}</span></h2>
                <h2>Số bàn chơi: <span>{soBanChoi}</span></h2>
                <button className='btn btn-success' onClick={() => {
                    let action = {
                        type: 'PLAY_GAME'
                    }
                    this.props.dispatch(action)
                }}>Play Game</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi: rootReducer.gameOanTuTiReducer
    }
}
export default connect(mapStateToProps)(KetQua)