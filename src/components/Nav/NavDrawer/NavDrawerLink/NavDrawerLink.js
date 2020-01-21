import React from 'react'
import { ListItem, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useDrawerState from '../../../../Hoc/useDrawerState'

const NavDrawerLink = ({ to, onClick }) => {
  const { setDrawerState } = useDrawerState()
  return (
    <ListItem
      component={Link}
      to={to}
      onClick={() => setDrawerState(false)}
      button>
      <Typography variant='h1'>{to}</Typography>
    </ListItem>
  )
}

export default NavDrawerLink
