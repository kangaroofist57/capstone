import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './styles/main.scss';

import admins from './configs/adminID.json';
import Home from './components/pages/home';
import Login from './components/pages/login';
import NoMatch from './components/pages/noMatch';
import UserData from './components/users/userData';
import Todos from './components/users/todos';
import Users from './components/pages/admin-pages/users';

export default class APP extends Component {

  constructor() {
    super()
    this.state = {
      username: null,
      password: null,
      width: 0,
      height: 0
    }
  }

  componentDidMount = () => {

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    axios.get('/api/creds').then(async response => {
      await response.data.forEach(data => {
        if(localStorage.getItem('userInfo')) {
          let userInfo = JSON.parse(localStorage.getItem('userInfo'));
          let id = JSON.parse(localStorage.getItem('userInfo'))._id;
          if(data._id === id) {
            this.setState({
              loggedInStatus: true
            });

            userInfo.students = data.students;
            userInfo.todos = data.todos;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
          }
        }
      });
    });

    // return status;

  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  loggedInPages = () => [
    <Route key="1" exact component={UserData} path="/data" />,
    <Route key="2" exact component={Todos} path="/todos" />
  ]

  loggedInButtons = () => [
    <NavLink key="1" to="/data" activeClassName="active-link">Data</NavLink>,
    <NavLink key="2" to="/todos" activeClassName="active-link">Todos</NavLink>
  ]

  logOut = () => {
    let status = localStorage.getItem('loggedInStatus');
    console.log('status');
    if(status === 'true') {
      localStorage.clear();
      // this.history.push('/login');
      window.location.reload({ forcedReload: false });
    }
  }

  adminContent = () => {
    return {
      buttons: [
        <NavLink exact to='/users' activeClassName='active-link'>Users</NavLink>
      ],
      routes: [
        <Route key="1" exact component={Users} path="/users" />
      ]
    }
  }

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
                {admins.adminID.includes(localStorage.getItem('id')) ? this.adminContent().buttons : null}
                <NavLink to="/auth" activeClassName="active-link">{localStorage.getItem('loggedInStatus') === 'true'
                ?
                <div onClick={this.logOut}>{<FontAwesomeIcon icon={faSignOutAlt} />} {JSON.parse(localStorage.getItem('userInfo')).username}</div>
                :
                'Log in'}
                </NavLink>
              </div>
            </div>

            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Login} path="/auth" />
              {this.state.loggedInStatus === true ? this.loggedInPages() : null}
              {admins.adminID.includes(localStorage.getItem('id')) ? this.adminContent().routes : null}
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