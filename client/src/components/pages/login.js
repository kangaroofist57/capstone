import React, { Component } from 'react';
import axios from 'axios';

import { secretRoute } from '../../configs/adminID.json';

export default class Login extends Component {

  constructor() {
    super()

    this.state = {
      problems: null
    }
  }

  homeReload = () => {
    this.props.history.push('/');
    window.location.reload({ forcedReload: false });
  }

  handleClick = async() => {
    setTimeout(() => {
      this.setState({ problems: null })
    }, 4000);
    await axios.get(`/api/${secretRoute}`).then(response => {
      if(localStorage.getItem('loggedInStatus') === 'true') {
        localStorage.clear();
        this.homeReload();
      }
      response.data.forEach(obj => {
        if(obj.username === this.state.username) {
          if(obj.password === this.state.password) {
            localStorage.setItem('loggedInStatus', true);
            localStorage.setItem('id', obj._id);
            localStorage.setItem('userInfo', JSON.stringify(obj));
            this.setState({
              userInfo: obj
            });
            this.homeReload();
          } else this.setState({
            problems: 'Incorrect password'
          });
        } else this.setState({
          problems: 'Incorrect username'
        });
      });
    }).catch(err => {
      console.log('axios Error', err);
    });
  }

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  createAccount = async() => {

    setTimeout(() => {
      this.setState({
        problems: null
      });
    }, 4000);

    if(!this.state.newUsername) return this.setState({
      problems: 'Please fill in username'
    });

    if(!this.state.newPassword) return this.setState({
      problems: 'Please fill in passwords'
    });

    if(this.state.newPassword !== this.state.confirmPassword) return this.setState({
      problems: 'Passwords do not match'
    });

    let usernameCheck = false;
    await axios.get(`/api/${secretRoute}`).then(response => {
      let userFind = response.data.find(user => user.username === this.state.newUsername);
      if(userFind) {
        usernameCheck = true;
        this.setState({ problems: 'Username is already taken' });
      }
    });
    if(usernameCheck) return;
    axios.post('/api/newUser', { username: this.state.newUsername, password: this.state.newPassword }).then(data => {

    });
    this.homeReload();
  }

  render() {
    return (
      <div className="app">

        <div className="log-in-form">

          <form>

            <h1>Log In Here</h1>
            <label>username: </label>
            <input
              name="username"
              placeholder="Username"
              type="username"
              onChange={this.changeHandler}
            />

            <label>password: </label>
            <input
              autoComplete='new-password'
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.changeHandler}
            />


          </form>

          <button onClick={this.handleClick}>{localStorage.getItem('loggedInStatus') === 'true' ? "Log Out" : "Log In"}</button>

        </div>
        
        <div className="create-account-form">

          <form>

          <h1>Create Account Here</h1>
            <label>username: </label>
            <input
              name="newUsername"
              placeholder="New Username"
              type="username"
              onChange={this.changeHandler}
            />

            <label>password: </label>
            <input
              autoComplete='new-password'
              name="newPassword"
              placeholder="New Password"
              type="password"
              onChange={this.changeHandler}
            />

            <label>confirm password: </label>
            <input
              autoComplete='new-password'
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              onChange={this.changeHandler}
            />


          </form>

          <button onClick={this.createAccount}>Create Account</button>

        </div>
        <div className="problems">
          <div>problems:</div>
          <div className="problem">{this.state.problems ? this.state.problems : null}</div>
        </div>

      </div>
    );
  }
}