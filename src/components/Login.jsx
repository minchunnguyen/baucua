import React, { Component } from 'react'
import './../Style/Login.css'
import { fakeAuth } from '../common';
import { Redirect } from "react-router-dom";
import BtnSignUp from './BtnSignUp';
import UsersStorage from './../storages/uersStorage.js'
export default class Login extends Component {
    state = {
        inputUsername: ""
        , inputPassword: "",
        redirectToReferrer: false
    }
    _login = () => {
        const { inputUsername, inputPassword } = this.state;
        const users = UsersStorage.get();
        users.forEach(v => {
            console.log(v)
            if (v.username == inputUsername && v.password == inputPassword) {
                if (v.username === 'admin') {
                    this.props.history.push('/users')
                } else {
                    fakeAuth.authenticate(() => {
                        this.setState({ redirectToReferrer: true });
                    });
                    this.props.history.push('/play') /*Chuyển đến trang GamePlay*/
                }
            }
        })
    }

    _handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        // let { from } = this.props.location.state || { from: { pathname: "/play" } };
        // let { redirectToReferrer } = this.state;
        // if (redirectToReferrer) return <Redirect to={from} />;
        return (
            <div className="container login">
                <TitleLogin title={'ĐĂNG NHẬP ĐI! '} />
                <input value={this.state.inputUsername} name="inputUsername" className="row input"
                    type="text" onChange={this._handleInputChange} placeholder="Tên đăng nhập"></input>
                <input value={this.state.inputPassword} name="inputPassword" className="row input"
                    type="password" onChange={this._handleInputChange} placeholder="Mật khẩu"></input>
                <div>
                    <button className="btn btn-info btnLogin" onClick={this._login}>Đăng nhập</button>
                    <BtnSignUp history={this.props.history} />
                </div>
            </div>
        )
    }
}

const TitleLogin = (props) => {
    return (<h1 className="row title">{props.title}</h1>)
}