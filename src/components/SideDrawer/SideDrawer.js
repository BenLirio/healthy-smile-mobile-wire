import React from 'react'
import classes from './SideDrawer.module.scss'
import Typography from '../Typography/Typography'
import { Link } from 'react-router-dom'
export default function SideDrawer({ open, click }) {
  const classNames = ['SideDrawer', open ? 'Open' : 'Closed']
  return (
    <div className={classNames.map(name => classes[name]).join(' ')}>
      <Link onClick={click} className={classes.Link} to='/'>
        <Typography className='btn-text'>Home</Typography>
      </Link>
      <Link onClick={click} className={classes.Link} to='/about'>
        <Typography className='btn-text'>About</Typography>
      </Link>
    </div>
  )
}
