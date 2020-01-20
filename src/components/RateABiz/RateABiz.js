import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Rating from '../Rating/Rating'
import classes from './RateABiz.module.scss'
import useRatingLimiter from './useRatingLimiter'
import { Button } from 'react-bootstrap'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

export const RateABiz = () => {
  const { ratings, nextRatings, prevRatings } = useRatingLimiter()

  return (
    <div className={classes.RateABiz}>
      <h1>RateABiz</h1>
      <div className={classes.ReviewContainer}>
        {ratings.map(({ id, ...data }) => (
          <Rating key={id} {...data}></Rating>
        ))}
        <div className={classes.PrevRatings}>
          <FaArrowCircleLeft onClick={prevRatings} size='5rem'>
            previous
          </FaArrowCircleLeft>
        </div>
        <div className={classes.NextRatings}>
          <FaArrowCircleRight onClick={nextRatings} size='5rem'>
            next
          </FaArrowCircleRight>
        </div>
      </div>
    </div>
  )
}
RateABiz.propTypes = {}
export default RateABiz
