import React, { Component } from 'react'
import "./../Style/cardItem.css"
export default class CardItem extends Component {

    _clickTang = () => {
        this.props.onClick(this.props.id, true, this.props.tienCuoc) 
        /*props onClick truyền từ cha*/
        /*biến true(false ở hàm clickGiam) thể hiện số tiền cược có tăng không*/
    }
    _clickGiam = (e) => {
        e.preventDefault() /*ngăn sự kiện mặc định (sự kiện click phải xổ ra menu mặc định)*/
        this.props.onClick(this.props.id, false, this.props.tienCuoc)

    }
    render() {
        const { img } = this.props;
        return (
            <div className="card-container">
                <div className="card-item" onClick={this._clickTang} onContextMenu={this._clickGiam}>
                    <img id="hinh" src={img} />
                    <div id="soTien">{this.props.tienCuoc}</div>
                </div>
            </div>
        )
    }
}
