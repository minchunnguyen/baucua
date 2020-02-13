import React, { Component } from 'react'
import UsersStorage from '../storages/uersStorage';
import Comp from './Comp';
export default class ManageUser extends Component {
    state = {
        users: UsersStorage.get(),
        id: 1,
        user: " ",
        password: " ",
        soTien: " ",
        itemSelected: {}
    }

    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
                <table>
                    {this.state.users.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.username}</td>
                                <td>{value.password}</td>
                                <td>{value.soTien}</td>
                                <td><button
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="btnChangePassword"
                                    onClick={() => { this.setState({ itemIndex: index, userName: value.username, password: value.password }) }}
                                >Đổi mật khẩu</button></td>
                            </tr>
                        )
                    })}
                </table>
                <Comp user={this.state.userName} onChange123={(password) => {
                    const { users } = this.state;
                    users[this.state.itemIndex].password = password
                    this.setState({ users: users })
                }} />
            </React.Fragment>
        )
    }
}
