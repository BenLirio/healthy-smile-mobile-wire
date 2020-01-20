import React from 'react'
import Rating from '../Rating/Rating'
import classes from './RateABiz.module.scss'
import useRatingLimiter from './useRatingLimiter'
import { Button } from 'react-bootstrap'

export const RateABiz = () => {
  const { ratings, stats } = useRatingLimiter()
  const percent = Math.round((stats.averageRating / 5) * 100)
  return (
    <div className={classes.RateABiz}>
      <h1>RateABiz</h1>
      <div className={classes.AverageRatingContainer}>
        <div className={classes.EmptyStars}></div>
        <div
          className={classes.FullStars}
          style={{ width: `${percent}%` }}></div>
      </div>
      <p className={classes.Percent}>({stats.count})</p>
      <p>{stats.recommendationRate}% of our customers would recommend</p>
      <div className={classes.ReviewContainer}>
        {ratings.map(({ id, ...data }) => (
          <Rating key={id} {...data}></Rating>
        ))}
      </div>
      <div className={classes.ButtonContainer}>
        <Button size='lg' variant='dark'>
          {stats.count - (stats.count % 100)}+ MORE
        </Button>
      </div>
    </div>
  )
}
RateABiz.propTypes = {}
export default RateABiz
