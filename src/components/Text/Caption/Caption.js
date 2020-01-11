import React from 'react'
import classes from './Caption.module.scss'
export default function H2(props) {
  return <p className={classes.Text}>{props.children}</p>
}
