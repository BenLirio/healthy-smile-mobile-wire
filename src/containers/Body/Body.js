import React from 'react'
import classes from './Body.module.scss'
import Cta from '../../components/Cta/Cta'
export default function Body() {
  return (
    <div className={classes.Body}>
      <Cta />
    </div>
  )
}
