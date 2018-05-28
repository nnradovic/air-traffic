import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './Main';
import Header from './partials/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}

export default App;
