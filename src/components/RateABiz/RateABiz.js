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
  useEffect(() => {
    setFetching(true)
    console.log('loaded...')
    fetch(
      'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json'
    )
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        setStats(res.stats)
        setReviews(res.reviews)
        setFetching(false)
      })
      .catch(console.error)
  }, [])
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
