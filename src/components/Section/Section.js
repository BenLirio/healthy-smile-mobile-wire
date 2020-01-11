import React from 'react'
import classes from './Section.module.scss'
export default function Section(props) {
  return <div className={classes.Section}>{props.children}</div>
}
