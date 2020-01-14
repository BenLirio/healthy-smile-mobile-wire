import React from 'react'
import classes from './TopNav.module.scss'
import { Link } from 'react-router-dom'
import Typography from '../Typography/Typography'

export default function TopNav({ click }) {
  return (
    <div className={classes.TopNav}>
      <button onClick={click} className={classes.Mobile}>
        <Typography className='btn-text'>Drawer</Typography>
      </button>
      <Link className={classes.Link} to='/'>
        <Typography className='btn-text'>Home</Typography>
      </Link>
      <Link className={classes.Link} to='/about'>
        <Typography className='btn-text'>About</Typography>
      </Link>
    </div>
  )
}
