import React, { Component } from 'react';
import List from './components/List';
import { fetchUsers } from './actions/user.actions'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  fetchUsers = () => {
    this.props.fetchUsers();
  }

  render() {
    const { list, loading } = this.props.users;
    return (
      <div className="App">
        <List loading={loading} items={list} label={'Get USERS!!'} onClick={this.fetchUsers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);