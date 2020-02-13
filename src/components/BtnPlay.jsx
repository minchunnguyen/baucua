import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardName } from './../common/index'
class BtnPlay extends React.Component {
    render() {
        return (
            <button onClick={this._random} className="btn btn-success btnPlay">Play</button>
        )
    }
    _random1To6 = () => {
        var { list } = this.props;
        return Math.floor(Math.random() * list.length) + 1;
    }
    _random = () => {
        let temp = {}
        for (let i = 0; i < 3; i++) {
            let idTam = this._random1To6();
            temp[idTam] = (temp[idTam] || 0) + 1 /*temp[idTam] ? temp[idTam] : 0 */
            /*Vì mảng temp ban đầu rỗng => nếu temp[idTam] là undefinded thì gán temp[idTam] = 0*/
        }
        this.props.dispatch({ type: "SET_LIST_RANDOM", payload: temp })
        this._tinhTien(temp)
    }
    _tinhTien = (listRandom) => {
        let tongLoi = 0;
        const { listCuoc } = this.props
        Object.entries(listRandom).forEach(([keyId, soLanXuatHien]) => {
            for (let i = 0; i < listCuoc.length; ++i) {
                if (listCuoc[i].id == keyId) {
                    tongLoi += listCuoc[i].tienCuoc * (soLanXuatHien + 1)
                }
            }
        });
        const tienCuoc = this._tinhTienCuoc();
        const list = this._getListCuoc().map(val => {
            val.name = cardName[val.id]
            return {...val}
        });
        const log = {
            list: [...list] 
            , ketQua: this._ketQua(tongLoi, tienCuoc) //gọi hàm _ketQua  
        }
        console.log(log)
        this.props.dispatch({ type: "TINH_TIEN", payload: tongLoi })
        this.props.dispatch({type: "TEN_KHONG_CHUOI", payload: log})
        this._resetDatCuoc()
    }


    _ketQua = (tienLoi, tienCuoc) => {
        if (tienCuoc === tienLoi)
            return "Hòa"
        else if (tienCuoc > tienLoi)
            return "Thua"
        else
            return "Thắng"
    }
    _tinhTienCuoc = () => {
        let tienCuoc = 0;
        this.props.listCuoc.forEach(v => {
            if (v.tienCuoc !== 0)
                tienCuoc += v.tienCuoc
        })
        return tienCuoc;
    }
    _getListCuoc = () => {
        return this.props.listCuoc.filter(v => (v.tienCuoc !== 0))
    }
    _resetDatCuoc = () => {
        const { listCuoc } = this.props;
        const listReset = listCuoc.map((val) => {
            val.tienCuoc = 0
            return val;
        })
        this.props.dispatch({ type: "RESET", payload: listReset })
    }
}
const mapStateToProps = state => {
    return {
        list: state.list
        , listCuoc: state.listCuoc
        , tien: state.tien
        , urlHinh: state.urlHinh
        , listRandom: state.listRandom
        , listPlay: state.listPlay
    }
}
export default connect(mapStateToProps)(BtnPlay);