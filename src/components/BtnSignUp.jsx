import React, { Component } from 'react'
import './../Style/Login.css'
export default class BtnSignUp extends Component {
    _handleClickSignUp = () => {
        this.props.history.push('/signup')
    }
    render() {
        return (
            <button className="btn btn-success btnSignUp" onClick={this._handleClickSignUp}>Đăng ký</button>
        )
    }
}
