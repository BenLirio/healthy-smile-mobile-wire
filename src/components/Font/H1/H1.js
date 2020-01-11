import React from 'react'
import classes from './H1.module.scss'
export default function H1(props) {
  return <p className={classes.Text}>{props.children}</p>
}
