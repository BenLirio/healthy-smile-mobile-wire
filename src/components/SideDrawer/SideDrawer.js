import React from 'react'
import classes from './SideDrawer.module.scss'
import { Link } from 'react-router-dom'
export default function SideDrawer({ open, onClick }) {
  const classNames = ['SideDrawer', open ? 'Open' : 'Closed']
  return (
    <div className={classNames.map(name => classes[name]).join(' ')}>
      <Link onClick={onClick} to="/">
        Home
      </Link>
      <Link onClick={onClick} to="/about">
        About
      </Link>
    </div>
  )
}
