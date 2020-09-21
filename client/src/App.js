import React, { Component } from 'react';
import axios from 'axios';

export default class APP extends Component {

  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
    }
  }

  // componentDidMount = () => {
  //   axios.get('/api/creds').then(data => {
  //     this.setState({
  //       data: data.data
  //     });
  //     console.log(data);
  //   }).catch(err => {
  //     console.log('axios Error', err);
  //   });
  // }

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
      // this.setState({
      //   username: response.data,
      //   password: response.password
      // });
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
    axios.post('/api/newUser', { username: this.state.newUsername, password: this.state.newPassword }).then(data => {
      console.log(data);
    });
    localStorage.setItem('loggedInStatus', true);
  }

  // componentDidMount = () => {
  //   axios.get('/api/creds').then(response => {
  //     let fetchUser = response.data.filter(data => data._id === localStorage.getItem('id'));
  //     console.log(fetchUser);

  //     this.setState({
  //       userInfo: fetchUser[0]
  //     })
  //   });
  // }

  render() {
    return (
      <div className="App">

        <div>{localStorage.getItem('loggedInStatus') === 'true' ? `Logged In As ${JSON.parse(localStorage.getItem('userInfo')).username}` : null}</div>

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
            placeholder="Password"
            type="password"
            onChange={this.changeHandler}
          />


        </form>

        <button onClick={this.createAccount}>Create Account</button>

      </div>
    );
  }
}

/* <button onClick={this.handleClick}>test</button>
<div>{this.state.data !== null ? this.state.data.map(data =>(
  <div key={Math.random()*5}>
    <div>{data.username}</div>
    <div>{data.password}</div>
  </div>
)) : null}</div> */