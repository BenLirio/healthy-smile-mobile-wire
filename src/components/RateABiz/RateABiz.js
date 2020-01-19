import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Rating from '../Rating/Rating'
import classes from './RateABiz.module.scss'
import data from './data'

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
  // useEffect(() => {
  //   fetch(
  //     'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json'
  //   )
  //     .then(res => res.json())
  //     .then(pojo => {
  //       const reviews = pojo.reviews.map(
  //         ({
  //           authorLastName = '',
  //           authorFirstName = '',
  //           rating,
  //           id,
  //           text = '',
  //           title = '',
  //         }) => {
  //           return {
  //             id,
  //             name: `${authorFirstName} ${authorLastName}`,
  //             title,
  //             text,
  //             rating: Number.parseInt(rating),
  //           }
  //         }
  //       )
  //       setRatings(reviews)
  //     })
  //     .catch(console.error)
  // }, [])
  useEffect(() => {
    const pojo = data
    const reviews = pojo.reviews.map(
      ({
        authorLastName = '',
        authorFirstName = '',
        rating,
        id,
        text = '',
        title = '',
      }) => {
        return {
          id,
          name: `${authorFirstName} ${authorLastName}`,
          title,
          text,
          rating: Number.parseInt(rating),
        }
      }
    )
    setRatings(reviews)
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
