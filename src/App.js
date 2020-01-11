import React, { Component } from 'react'
import classes from './App.module.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
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
