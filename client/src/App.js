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

export default class APP extends Component {

  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
    }
  }

  render() {
    return(
      <div className="container">
        <Router>

          <div>

            <div className="nav-bar">
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
              <NavLink to="/auth" activeClassName="active-link">{localStorage.getItem('loggedInStatus') === 'true'
              ?
              'Log out'
              :
              'Log in'}
              </NavLink>
            </div>

            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Login} path="/auth" />
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