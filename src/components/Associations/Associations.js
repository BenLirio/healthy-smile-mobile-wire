import React from 'react'
import PropTypes from 'prop-types'
import classes from './Associations.module.scss'

export const Associations = () => (
  <div className={classes.Grid}>
    <div className={classes.Ada}></div>
    <div className={classes.Mda}></div>
  </div>
)
Associations.propTypes = {}
export default Associations
