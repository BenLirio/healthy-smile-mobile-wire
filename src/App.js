import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Body, Footer, Overlay } from './Sections/index'
import classes from './App.module.scss'
import { OverlayContextProvider } from './Sections/Overlay/OverlayContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => (
  <Router>
    <OverlayContextProvider>
      <Overlay />
      <Header />
    </OverlayContextProvider>
    <div className={classes.Layout}>
      <Body />
      <Footer />
    </div>
  </Router>
)
App.propTypes = {}

export default App
