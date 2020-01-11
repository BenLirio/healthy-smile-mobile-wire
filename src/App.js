import React, { Component } from 'react'
import classes from './App.module.css'
import Header from './containers/Header/Header'
import Body from './containers/Body/Body'
import Footer from './containers/Footer/Footer'
export default class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
