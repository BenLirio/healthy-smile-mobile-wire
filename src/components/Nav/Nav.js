import React from 'react'
import NavBar from './NavBar/NavBar'
import NavDrawer from './NavDrawer/NavDrawer'
import { Toolbar } from '@material-ui/core'

const Nav = () => {
  return (
    <>
      <NavBar />
      {/* An Additional relative toolbar helps spacing */}
      <Toolbar />
      <NavDrawer />
    </>
  )
}

export default Nav
