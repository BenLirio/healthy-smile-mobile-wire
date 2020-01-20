import React from 'react'
import PropTypes from 'prop-types'
import classes from './AboutImageList.module.scss'
import RateABiz from '../RateABiz/RateABiz'

export const AboutImageList = () => (
  <div className={classes.Grid}>
    <div className={classes.Image1}></div>
    <div className={classes.Image2}></div>
    <div className={classes.Image3}></div>
  </div>
)
AboutImageList.propTypes = {}
export default AboutImageList
