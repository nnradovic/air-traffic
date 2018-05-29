import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './Main';
import Header from './partials/Header';
import Footer from './partials/Footer';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
