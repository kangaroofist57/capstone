import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import axios from 'axios';

import './styles/main.scss';

import Home from './components/pages/home';
import Login from './components/pages/login';
import NoMatch from './components/pages/noMatch';
import UserData from './components/users/userData';
import Todos from './components/users/todos';

export default class APP extends Component {

  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
    }
  }

  componentDidMount = () => {

    // let status = false;

    axios.get('/api/creds').then(async response => {
      await response.data.forEach(data => {
        if(localStorage.getItem('userInfo')) {
          let id = JSON.parse(localStorage.getItem('userInfo'))._id;
          if(data._id === id) return this.setState({
            loggedInStatus: true
          });
        }
      });
    });

    // return status;

  }

  loggedInPages = () => [
    <Route key="1" exact component={UserData} path="/data" />,
    <Route key="2" exact component={Todos} path="/todos" />
  ]

  loggedInButtons = () => [
    <NavLink key="1" to="/data" activeClassName="active-link">Data</NavLink>,
    <NavLink key="2" to="/todos" activeClassName="active-link">Todos</NavLink>
  ]

  render() {
    return(
      <div className="container">
        <Router>

          <div className="body-container">
            <div className="nav-heading">
              <div className="heading">
                Teacher Tools
              </div>

              <div className="nav-bar">
                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                {this.state.loggedInStatus === true ? this.loggedInButtons() : null}
                <NavLink to="/auth" activeClassName="active-link">{localStorage.getItem('loggedInStatus') === 'true'
                ?
                JSON.parse(localStorage.getItem('userInfo')).username
                :
                'Log in'}
                </NavLink>
              </div>
            </div>

            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Login} path="/auth" />
              {this.state.loggedInStatus === true ? this.loggedInPages() : null}
              {/* <Route exact component={UserData} path="/data" /> */}
              <Route component={NoMatch} />
            </Switch>

          </div>

        </Router>
      </div>
    )
  }
}

/* <button onClick={this.handleClick}>test</button>
<div>{this.state.data !== null ? this.state.data.map(data =>(
  <div key={Math.random()*5}>
    <div>{data.username}</div>
    <div>{data.password}</div>
  </div>
)) : null}</div> */