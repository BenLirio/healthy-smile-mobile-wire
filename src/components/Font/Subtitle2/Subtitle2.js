import React from 'react'
import classes from './Subtitle2.module.scss'
export default function H2(props) {
  return <p className={classes.Text}>{props.children}</p>
}
