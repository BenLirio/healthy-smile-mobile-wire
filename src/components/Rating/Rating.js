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
  <div>
    <h3 className={classes.Star}>{rating >= 1 ? '★' : '☆'}</h3>
    <h3 className={classes.Star}>{rating >= 2 ? '★' : '☆'}</h3>
    <h3 className={classes.Star}>{rating >= 3 ? '★' : '☆'}</h3>
    <h3 className={classes.Star}>{rating >= 4 ? '★' : '☆'}</h3>
    <h3 className={classes.Star}>{rating >= 5 ? '★' : '☆'}</h3>
    <h1>{name}</h1>
    <h2>{title}</h2>
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
