import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Body, Footer } from './Sections/index'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    )
  }
}
