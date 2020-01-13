import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Body, Footer } from './Sections/index'
export default () => (
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>
)
