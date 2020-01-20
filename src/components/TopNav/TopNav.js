import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import NavButton from './NavButton/NavButton'
import classes from './TopNav.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { MailIcon } from '@material-ui/icons/Mail'

const TopNav = props => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [pName, setPName] = useState('/a')
  const toggleDrawer = state => {
    setDrawerOpen(state)
  }
  const {
    location: { pathname },
  } = props

  const onUpdate = name => {
    console.log('pName', name)
    setPName(pathname)
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.MenuButton}>
            <IconButton
              onClick={() => toggleDrawer(true)}
              edge='start'
              color='inherit'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.CollapsibleMenu}>
            <NavButton link='home' clicked={onUpdate} pathName={pName} />
            <NavButton link='newPatient' clicked={onUpdate} pathName={pName} />
            <NavButton link='services' pathName={pName} />
            <NavButton link='testimonials' pathName={pName} />
            <NavButton link='about' pathName={pName} />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List component='nav'>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
export default withRouter(TopNav)
