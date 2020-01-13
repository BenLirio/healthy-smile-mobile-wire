import React from 'react'
import classes from './Backdrop.module.scss'
export default function Backdrop({ click }) {
  return <div className={classes.Backdrop} onClick={click}></div>
}
