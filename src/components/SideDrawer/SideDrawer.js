import React from 'react'
import classes from './SideDrawer.module.scss'
export default function SideDrawer({ open }) {
  const classNames = ['SideDrawer', open ? 'Open' : 'Closed']
  return <div className={classNames.map(name => classes[name]).join(' ')}></div>
}
