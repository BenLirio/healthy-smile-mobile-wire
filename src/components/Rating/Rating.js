import React from 'react'
import PropTypes from 'prop-types'
import classes from './Rating.module.scss'

// 'authorLastName',
// 'createdDate',
// 'authorFirstName',
// 'rating',
// 'id',
// 'text',
// 'title',

export const Rating = ({ title, text, name, rating }) => (
  <div className={classes.Rating}>
    <h2>{name}</h2>
    <h5 className={classes.Star}>{rating >= 1 ? '★' : '☆'}</h5>
    <h5 className={classes.Star}>{rating >= 2 ? '★' : '☆'}</h5>
    <h5 className={classes.Star}>{rating >= 3 ? '★' : '☆'}</h5>
    <h5 className={classes.Star}>{rating >= 4 ? '★' : '☆'}</h5>
    <h5 className={classes.Star}>{rating >= 5 ? '★' : '☆'}</h5>
    <h3>{title}</h3>
    <p>{text}</p>
    <p>test</p>
  </div>
)

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default Rating
