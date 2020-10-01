import React, { Component } from 'react';
import axios from 'axios';

import UserModal from '../../modals/user-modal';
import admins from '../../../configs/adminID.json';

export default class Users extends Component {
    constructor() {
        super()

        this.state = {
            allUsers: [],
            userModal: false
        }
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    componentDidMount = () => {

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        axios.get('/api/creds').then(response => {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            let filteredList = response.data.filter(user => user._id !== userInfo._id && !admins.adminID.includes(user._id));
            this.setState({
                allUsers: filteredList
            });
        })
    }

    toggleUserModal = (user) => {
        if(this.state.userModal) {
            this.setState({ userModal: false });
        } else {
            this.setState({ user, userModal: true });
            console.log(user);
        }
    }

    deleteUser = (mongoID) => {
        let newList = this.state.allUsers.filter(user => user._id !== mongoID);
        let findUser = this.state.allUsers.find(user => user._id === mongoID);
        console.log(findUser);
        this.setState({ allUsers: newList });

        axios.post('/api/deleteUser', { findUser }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log('axios err', err);
        })
    }

    renderCards = () => {
        // console.log(this.state.allUsers)
        return this.state.allUsers.map((user) => (
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
                    <button onClick={() => this.toggleUserModal(user)}>view</button>
                    <button onClick={() => this.deleteUser(user._id)}>delete</button>
                </div>
            </div>
        ));
    }

    render() {
        return(
            <div>
                <div className='user-cards'>
                    {this.renderCards()}
                    {this.state.userModal ? <UserModal dim={{ width: this.state.width, height: this.state.height}} user={this.state.user} toggleUserModal={this.toggleUserModal} /> : null}
                </div>
            </div>
        )
    }
}