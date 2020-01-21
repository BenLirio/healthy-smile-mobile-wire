import React, { Component } from 'react'
import CurrentPage from './pages/CurrentPage'
import Nav from './components/Nav/Nav'
import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <Nav />
        <CurrentPage />
        <div style={{ width: '100%', height: '300px', background: '#eee' }} />
      </>
    )
  }
}
