import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layout/NavBar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import github from './apis/Github';
import Search from './components/Users/Search';
import Alert from './layout/Alert';
import About from './pages/About';

class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  componentDidMount() {
    (async () => {
      const response = await github.get(`/users`)
      this.setState({ users: response.data, loading: false })
    })()
  }

  searchUsers = async text => {
    this.setState({ loading: true })
    const response = await github.get(`/search/users?q=${text}`)
    this.setState({ users: response.data.items, loading: false })
  }

  getUser = async username => {
    this.setState({ loading: true })
    const response = await github.get(`/users/${username}`)
    this.setState({ user: response.data, loading: false })
  }

  getUserRepos = async username => {
    this.setState({ loading: true })
    const response = await github.get(`/users/${username}/repos?per_page=5&sort=created:asc`)
    this.setState({ repos: response.data, loading: false })
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" render={props => (
            <Fragment>
              <Alert alert={this.state.alert} />
              <Search setAlert={this.setAlert}
                searchUsers={this.searchUsers}
                clearUsers={this.clearUsers} showClear={this.state.users.length ? true : false}
              />
              <div className="container">
                <Users users={this.state.users}
                  loading={this.state.loading}
                />
              </div>
            </Fragment>
          )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (
            <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos} />
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
