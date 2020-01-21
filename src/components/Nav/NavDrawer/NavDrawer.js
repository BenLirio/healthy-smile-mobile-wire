import React from 'react'
import { Drawer, List, ListItem, Typography } from '@material-ui/core'
import NavDrawerLink from './NavDrawerLink/NavDrawerLink'
import useDrawerState from '../../../Hoc/useDrawerState'

const NavDrawer = () => {
  const { drawerState, setDrawerState } = useDrawerState()
  return (
    <Drawer open={drawerState} onClose={() => setDrawerState(false)}>
      <List>
        <NavDrawerLink to='about' onClick={() => setDrawerState(false)} />
        <ListItem button>
          <Typography variant='h1'>World</Typography>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavDrawer
