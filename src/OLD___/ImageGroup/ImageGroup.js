import React from 'react'
import classes from './ImageGroup.module.scss'
export default function ImageGroup() {
  return (
    <div className={classes.ImageGroup}>
      <div className={classes.ImageOne}></div>
      <div className={classes.ImageTwo}></div>
      <div className={classes.ImageThree}></div>
      <div className={classes.ImageFour}></div>
    </div>
  )
}
