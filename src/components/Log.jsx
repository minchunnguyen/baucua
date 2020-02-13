import React, { Component } from 'react'
import { connect } from 'react-redux';
class Log extends Component {
    _renderKetQua = () => {
        const { listPlay } = this.props;
        return listPlay.map((val,index)=> {
            return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{val.list.map(value => {
                                return value.name + ","
                            })
                        }</td>
                        <td>{val.ketQua}</td>
                    </tr>
            )
        })
    }

    render() {
        console.log(this.props.listPlay)
        return (
            <div>
                <table className="tableLog">
                    <tr>
                        <th>Lần</th>
                        <th>Con đặt cược</th>
                        <th>Kết quả</th>
                    </tr>
                    {this._renderKetQua()}
                    {/* <tr>
                        {
                            this.props.listPlay && this.props.listPlay.map(value => {
                                return (
                                    <th>{value.ketQua}</th>
                                )
                            })
                        }
                    </tr> */}
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        listPlay: state.listPlay
    }
}
export default connect(mapStateToProps)(Log);