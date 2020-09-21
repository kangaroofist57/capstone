import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

  constructor() {
    super()

    this.state = {
      problems: null
    }
  }

  handleClick = async() => {
    await axios.get('/api/creds').then(response => {
      if(localStorage.getItem('loggedInStatus') === 'true') localStorage.clear();
      response.data.forEach(obj => {
        if(obj.username === this.state.username) {
          if(obj.password === this.state.password) {
            localStorage.setItem('loggedInStatus', true);
            localStorage.setItem('id', obj._id);
            localStorage.setItem('userInfo', JSON.stringify(obj));
            this.setState({
              userInfo: obj
            });
          }
        }
      });
      console.log(response);
    }).catch(err => {
      console.log('axios Error', err);
    });
    window.location.reload({ forcedReload: false });
  }

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  createAccount = () => {

    if(!this.state.newUsername) return this.setState({
      problems: 'Please fill in username'
    });

    if(!this.state.newPassword) return this.setState({
      problems: 'Please fill in passwords'
    });

    if(this.state.newPassword !== this.state.confirmPassword) return this.setState({
      problems: 'Passowords do not match'
    });

    axios.post('/api/newUser', { username: this.state.newUsername, password: this.state.newPassword }).then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="app">

        <div className="user-name">{localStorage.getItem('loggedInStatus') === 'true'
        ?
        (<div>
          <div>Logged In As</div>
          <h1>{JSON.parse(localStorage.getItem('userInfo')).username}</h1>
        </div>)
        :
        null}</div>

        <div className="log-in-form">

          <form>

            <label>username: </label>
            <input
              name="username"
              placeholder="Username"
              type="username"
              onChange={this.changeHandler}
            />

            <label>password: </label>
            <input
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

            <label>username: </label>
            <input
              name="newUsername"
              placeholder="Username"
              type="username"
              onChange={this.changeHandler}
            />

            <label>password: </label>
            <input
              name="newPassword"
              placeholder="Password"
              type="password"
              onChange={this.changeHandler}
            />

            <label>confirm password: </label>
            <input
              name="confrimPassword"
              placeholder="Confirm Password"
              type="password"
              onChange={this.changeHandler}
            />


          </form>

          <button onClick={this.createAccount}>Create Account</button>

          <div className="problems">{this.state.problems ? this.state.problems : null}</div>

        </div>

      </div>
    );
  }
}