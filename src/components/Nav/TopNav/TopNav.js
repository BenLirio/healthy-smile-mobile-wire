import React from 'react'
import classes from './TopNav.module.scss'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <div className={classes.TopNav}>
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
    </div>
  )
}
