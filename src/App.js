import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Body, Footer } from './Sections/index'
import classes from './App.module.scss'
import Overlay from './Sections/Overlay/Overlay'
import { OverlayContextProvider } from './Sections/Overlay/OverlayContext'
export default () => {
  return (
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
}
