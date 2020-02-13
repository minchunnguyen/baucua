import React, { Component } from 'react';
import { connect } from 'react-redux';
class RandomItem extends Component {
    _render3Con = () => {
        let temp = [];
        Object.entries(this.props.listRandom).forEach(([key, val]) => {
            for (let i = 0; i < val; ++i) {
                temp.push(
                    <div>
                        <img className={'imgRandom'} src={this.props.urlHinh[key]} />
                    </div>
                )
            }
        })
        return temp;
    }
    render() {
        return (
            this._render3Con()
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
    , listCuoc: state.listCuoc
    , tien: state.tien
    , urlHinh: state.urlHinh
    , listRandom: state.listRandom
})

export default connect(mapStateToProps)(RandomItem)