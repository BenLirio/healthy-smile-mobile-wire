import React, { useState, useEffect } from 'react'
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
  const [ratings, setRatings] = useState([])
  useEffect(() => {}, [])
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
