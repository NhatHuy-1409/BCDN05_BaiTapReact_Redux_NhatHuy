import React, { Component } from 'react'
import './GameOanTuTi.css'
import imgPlayer from '../../asset/image/player.png'
import imgPlayerCom from '../../asset/image/playerComputer.png'
import imgKeo from '../../asset/image/keo.png'
import imgBua from '../../asset/image/bua.png'
import imgBao from '../../asset/image/bao.png'
import '../../asset/image/buble.css'
import KetQua from './KetQua'
import { connect } from 'react-redux';
class GameOanTuTi extends Component {
    render() {
        let { actionPlayer, actionPlayerCom } = this.props.gameOanTuTi
        return (
            <div className='content '>
                <div className="row container">
                    <div className="col-3 item">
                        <div className='speech-bubble'>
                            <img className='playerAction' src={actionPlayer} alt="" />
                        </div>
                        <img className='player' src={imgPlayer} alt="" />
                        <div className='row keobuabao'>
                            <div className='col-4'>
                                <img src={imgKeo} alt="" onClick={() => {
                                    let action = {
                                        type: 'SELECT_ACTION',
                                        act: 'keo'
                                    }
                                    this.props.dispatch(action)
                                }} />
                            </div>
                            <div className='col-4'>
                                <img src={imgBua} alt="" onClick={() => {
                                    let action = {
                                        type: 'SELECT_ACTION',
                                        act: 'bua'
                                    }
                                    this.props.dispatch(action)
                                }} />
                            </div>
                            <div className='col-4'>
                                <img src={imgBao} alt="" onClick={() => {
                                    let action = {
                                        type: 'SELECT_ACTION',
                                        act: 'bao'
                                    }
                                    this.props.dispatch(action)
                                }} />
                            </div>

                        </div>
                    </div>
                    <KetQua />
                    <div className="col-3 item">
                        <div className='speech-bubble'>
                            <img className='playerAction' src={actionPlayerCom} alt="" />
                        </div>
                        <img className='player' src={imgPlayerCom} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi: rootReducer.gameOanTuTiReducer
    }
}

export default connect(mapStateToProps)(GameOanTuTi)