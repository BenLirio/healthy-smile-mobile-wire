import React, { useState, useEffect } from 'react'
import classes from './RateABiz.module.scss'
import Typography from '../Typography/Typography'

export default function RateABiz() {
  const [fetching, setFetching] = useState(false)
  const [stats, setStats] = useState({})
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    setFetching(true)
    console.log('loaded...')
    fetch(
      'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json',
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
  const reviewRender = reviews.map(review => {
    return (
      <div key={review.id} className={classes.Review}>
        <div>
          <Typography className='h4'>
            {review.authorFirstName} {review.authorLastName}
          </Typography>
        </div>
        <div>
          <Typography className=''>{review.text}</Typography>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div>average: {stats.averageRating}</div>
      {reviewRender}
    </div>
  )
}
