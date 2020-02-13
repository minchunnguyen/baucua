import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        iNewPassword: "",
        iReNewPassword: ""
    }
    _handleChangePassword = () => {
        const { iNewPassword, iReNewPassword } = this.state
        const { index } = this.props
        if (iNewPassword === iReNewPassword) {
            this.props.onChange123(iNewPassword)
        }
    }
    _handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Đổi mật khẩu</h4>
                        </div>
                        <div class="modal-body">
                            <p>Tên đăng nhập: </p>
                            <input type="text" placeholder={this.props.user}></input>
                            <p>Mật khẩu mới: </p>
                            <input value={this.state.iNewPassword} name="iNewPassword"
                                onChange={this._handleInputChange} type="password" />
                            <p>Nhập lại Mật khẩu mới: </p>
                            <input value={this.state.iReNewPassword} name="iReNewPassword"
                                onChange={this._handleInputChange} type="password" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" onClick={this._handleChangePassword}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

