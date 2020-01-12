import React from 'react'
import classes from './Post.module.scss'
export default function Post(props) {
  return <div className={classes.Post}>{props.children}</div>
}
