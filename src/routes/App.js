import React, { Component } from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Sections/Header/Header'
import Footer from '../components/Sections/Footer/Footer'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
            <div>about</div>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}
