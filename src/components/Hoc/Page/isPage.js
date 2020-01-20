import React from 'react'
import classes from './isPage.module.scss'

export const isPage = OriginalComponent => () => (
  <div className={classes.Page}>
    <OriginalComponent />
  </div>
)

export default isPage
