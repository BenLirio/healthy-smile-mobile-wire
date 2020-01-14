import React from 'react'
import classes from './Backdrop.module.scss'
export default function Backdrop({ click, open }) {
  const classNames = ['Backdrop', open ? 'Open' : 'Closed']
  return (
    <div
      className={classNames.map(name => classes[name]).join(' ')}
      onClick={click}
    ></div>
  )
}
