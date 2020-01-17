import React from 'react'
import classes from './TopNav.module.scss'
import { Link } from 'react-router-dom'

export default function TopNav({ onClick }) {
  console.log('onClick', onClick)
  return (
    <div className={classes.TopNav}>
      <button className={classes.Button} onClick={onClick}>
        Drawer
      </button>
      <Link className={classes.Link} to="/">
        Home
      </Link>
      <Link className={classes.Link} to="/about">
        About
      </Link>
    </div>
  )
}
