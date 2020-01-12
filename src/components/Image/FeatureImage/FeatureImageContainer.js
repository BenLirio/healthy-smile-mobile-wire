import React from 'react'
import classes from './FeatureImageContainer.module.scss'
export default function FeatureImageContainer(image) {
  return <div className={classes.FeatureImageContainer}>{image()}</div>
}
