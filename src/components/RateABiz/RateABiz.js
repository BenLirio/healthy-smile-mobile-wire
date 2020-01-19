import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from '../Rating/Rating'
import classes from './RateABiz.module.scss'

const params = [
  'authorLastName',
  'createdDate',
  'authorFirstName',
  'rating',
  'id',
  'text',
  'title',
]

export const RateABiz = () => {
  const [ratings, setRatings] = useState([
    {
      id: 1,
      title: 'Trees everywhere',
      text: 'Lorem ipsum dolor sit.',
      name: 'Ben Bingo',
      rating: 4,
    },
    {
      id: 2,
      title: 'The Toast',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      name: 'Darius',
      rating: 5,
    },
  ])
  return (
    <>
      <h1>RateABiz</h1>
      <div className={classes.Container}>
        {ratings.map(({ id, ...data }) => (
          <Rating key={id} {...data}></Rating>
        ))}
      </div>
    </>
  )
}
RateABiz.propTypes = {}
export default RateABiz
