import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Body, Footer } from './Sections/index'
export default () => (
  <Router>
    <Header />
    <div className='main-layout'>
      <Body />
      <Footer />
    </div>
  </Router>
)
