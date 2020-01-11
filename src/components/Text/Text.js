import React from 'react'
import classes from './Text.module.scss'
import H4 from '../Font/H4/H4'
import P1 from '../Font/P1/P1'

export default function Text(props) {
  return (
    <div className={classes.Text}>
      <div className={classes.Title}>
        <H4>{props.title}</H4>
      </div>
      <div className={classes.Body}>
        <P1>{props.children}</P1>
      </div>
    </div>
  )
}
