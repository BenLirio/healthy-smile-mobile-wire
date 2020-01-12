import React from 'react'
import classes from './ReviewHolder.module.scss'
import Text from '../Text/Text'
export default function ReviewHolder(props) {
  return <div className={classes.ReviewHolder}>{props.children}</div>
}
