import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useDrawerState from '../../../Hoc/useDrawerState'

const NavBar = () => {
  const { drawerState, setDrawerState, Provider } = useDrawerState()
  return (
    <Provider>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton onClick={() => setDrawerState(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Provider>
  )
}

export default NavBar
