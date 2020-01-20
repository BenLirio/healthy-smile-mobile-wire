import { useEffect, useState } from 'react'
import data from './data'
const url =
  'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json'
const parse = res => res.json()
const mapRatings = pojo => {
  return pojo.reviews.map(
    ({
      authorLastName = '',
      authorFirstName = '',
      rating,
      id,
      text = '',
      title = '',
      createdDate,
    }) => {
      return {
        id,
        name: `${authorFirstName} ${authorLastName}`,
        title,
        text,
        rating: Number.parseInt(rating),
        createdDate,
      }
    }
  )
}

export default function useRatingLimiter() {
  const [ratings, setRatings] = useState([])
  const [index, setIndex] = useState(0)
  const nextRatings = () => {
    setIndex(currentIndex => {
      return currentIndex + 1
    })
  }
  const prevRatings = () => {
    setIndex(currentIndex => {
      return currentIndex + 1
    })
  }
  // useEffect(() => {}, [])
  // useEffect(() => {
  //   fetch(url)
  //     .then(parse)
  //     .then(mapRatings)
  //     .then(setRatings)
  //     .catch(console.error)
  // }, [])
  useEffect(() => {
    setRatings(mapRatings(data))
  }, [])
  return {
    // ratings: ratings.slice(index, index + 6),
    ratings,
    nextRatings,
    prevRatings,
  }
}
