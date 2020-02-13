import React, { Component } from 'react'
import UsersStorage from '../storages/uersStorage';

export default class SignUp extends Component {
    state = {
        inputUsername: "",
        inputPassword: "",
        inputSoTien: 0
    }
    _handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    _handleClickSubmit = () => {
        const { inputUsername, inputPassword, inputSoTien } = this.state;
        const user = { username: inputUsername, password: inputPassword, soTien: inputSoTien }
        // console.log(UsersStorage.get())
        UsersStorage.addUser(user)
    }
    render() {
        return (
            <div className="container login">
                <p>Username: </p><input value={this.state.inputUsername} name="inputUsername" className="row input"
                    type="text" onChange={this._handleInputChange}></input>
                <p>Password: </p><input value={this.state.inputPassword} name="inputPassword" className="row input"
                    type="password" onChange={this._handleInputChange}></input>
                <p>Số tiền tăng mặc định: </p><input value={this.state.inputSoTien} name="inputSoTien" className="row input"
                    type="text" onChange={this._handleInputChange}></input>
                <button onClick={this._handleClickSubmit} className="btn btn-success">Submit</button>
            </div>
        )
    }
}
