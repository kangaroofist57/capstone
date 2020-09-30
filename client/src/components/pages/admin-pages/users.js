import React, { Component } from 'react';
import axios from 'axios';

import UserModal from '../../modals/user-modal';

export default class Users extends Component {
    constructor() {
        super()

        this.state = {
            allUsers: [],
            userModal: false
        }
    }

    componentDidMount = () => {
        axios.get('/api/creds').then(response => {
            this.setState({
                allUsers: response.data
            });
        })
    }

    toggleUserModal = () => {
        if(this.state.userModal) {
            this.setState({ userModal: false });
        } else {
            this.setState({ userModal: true })
        }
    }

    deleteUser = () => {

    }

    renderCards = () => {
        console.log(this.state.allUsers)
        return this.state.allUsers.map(user => (
            <div className='user-card'>
                <div>
                    <div>Username:</div>
                    <div>{user.username}</div>
                </div>
                <div>
                    <div>User ID:</div>
                    <div>{user._id}</div>
                </div>
                <div className='user-button'>
                    <button onClick={this.toggleUserModal}>view</button>
                    <button onClick={this.deleteUser}>delete</button>
                </div>
            </div>
        ));
    }

    render() {
        return(
            <div>
                <div className='user-cards'>
                    {this.renderCards()}
                    {this.state.userModal ? <UserModal toggleUserModal={this.toggleUserModal} /> : null}
                </div>
            </div>
        )
    }
}