import React, { Component } from 'react'
import CurrentPage from './pages/CurrentPage'
import TopNav from './components/TopNav/TopNav'
import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <TopNav />
          <CurrentPage />
        </BrowserRouter>
        <div style={{ width: '100%', height: '300px', background: '#eee' }} />
      </>
    )
  }
}
