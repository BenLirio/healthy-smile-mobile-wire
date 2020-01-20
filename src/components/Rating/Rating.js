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
const date = new Date()
const currentDate = {
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
}
const yearsSince = createdDate => {
  const currentTotal = currentDate.year * 12 + currentDate.month
  const createdTotal = createdDate.year * 12 + createdDate.month
  const monthDiff = currentTotal - createdTotal
  let text
  if (monthDiff === 0) {
    text = 'less than a month ago'
  } else if (monthDiff === 1) {
    text = 'one month ago'
  } else {
    text = monthDiff + ' months ago'
  }
  return <p>{text}</p>
}

export const Rating = ({ title, text, name, rating, createdDate }) => (
  <div className={classes.Rating}>
    <h3>{name}</h3>
    <div className={classes.StarContainer}>
      <p className={classes.Star}>{rating >= 1 ? '★' : '☆'}</p>
      <p className={classes.Star}>{rating >= 2 ? '★' : '☆'}</p>
      <p className={classes.Star}>{rating >= 3 ? '★' : '☆'}</p>
      <p className={classes.Star}>{rating >= 4 ? '★' : '☆'}</p>
      <p className={classes.Star}>{rating >= 5 ? '★' : '☆'}</p>
      {yearsSince(createdDate)}
    </div>
    <h5>{title}</h5>
    <p className={classes.RatingText}>"{text}"</p>
  </div>
)

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  createdDate: PropTypes.object.isRequired,
}

export default Rating
