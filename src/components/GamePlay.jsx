import React from 'react';
import CardItem from './CardItem';
import { connect } from 'react-redux'
import RandomItem from './RandomItem';
import BtnPlay from './BtnPlay';
import Log from './Log';

class GamePlay extends React.Component {
    /*Hàm trả về số tiền cược*/
    _handleGetTienCuoc = (id) => {
        const temp = this.props.listCuoc.find((value) => {
            return value.id === id
        })
        return temp.tienCuoc;
    }
    /*Hàm click đặt cược/trả cược*/
    _handleClickDatCuoc = (id, isTang, tienCuoc) => {
        let { listCuoc, tien } = this.props;
        let tienTang = isTang ? 10 : -10;
        if (tienCuoc === 0 && !isTang)
            return;
        if (tien === 0 && isTang)
            return;
        listCuoc = listCuoc.map(value => {
            if (value.id === id) {
                value.tienCuoc += tienTang
                tien += (-tienTang)
            }
            return value;
        })
        this.props.datCuoc(listCuoc, tien)
        // this.setState(
        //     { listCuoc: listCuoc, tien: tien }
        // )
    }
    /*Hàm render ra các cardItem lúc đầu*/
    _renderItem = () => {
        return this.props.list.map((val) => {
            return (
                    <CardItem id={val.id} img={val.src} onClick={this._handleClickDatCuoc}
                        tienCuoc={this._handleGetTienCuoc(val.id)} />
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="col-12">
                    <h1 className="header">GAME BẦU CUA</h1>
                </div>
                <div className="row">
                    <div className="col-1"><BtnPlay /></div>
                    <RandomItem />
                    <div className="col-1">
                        <span className="tien">${this.props.tien}</span>
                    </div>
                </div>
                <div className="tableList">
                    {this._renderItem()}
                </div>
                <div className="row">
                    <Log/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.list
    , listCuoc: state.listCuoc
    , tien: state.tien
    , urlHinh: state.urlHinh
    , listRandom: state.listRandom
})

const mapDispatchToProps = dispatch => ({
    datCuoc: (listCuoc, tien) => {
        dispatch({
            type: "DAT_CUOC", payload: {
                listCuoc, tien
            }
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(GamePlay);
