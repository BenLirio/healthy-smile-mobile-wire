import React from 'react'
import PropTypes from 'prop-types'
import classes from './Feature.module.scss'
import { FaClock, FaHeart, FaTooth, FaArrowRight } from 'react-icons/fa'

const setIcon = icon => {
  const size = '8rem'
  switch (icon) {
    case 'FaClock':
      return <FaClock size={size} />
    case 'FaTooth':
      return <FaTooth size={size} />
    case 'FaHeart':
      return <FaHeart size={size} />
    default:
      return <div></div>
  }
}
const getText = icon => {
  switch (icon) {
    case 'FaClock':
      return <h1>Schedule</h1>
    case 'FaTooth':
      return <h1>Services</h1>
    case 'FaHeart':
      return <h1>Quality</h1>
    default:
      return <div></div>
  }
}

export const Feature = ({ icon }) => (
  <div className={classes.Feature}>
    <div className={classes.Icon}>{setIcon(icon)}</div>
    {getText(icon)}
    <div className={classes.Arrow}>
      <FaArrowRight size='3rem' />
    </div>
  </div>
)
Feature.propTypes = {
  icon: PropTypes.string.isRequired,
}
export default Feature
