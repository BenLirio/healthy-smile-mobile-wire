import React from 'react'
import classes from './Review.module.scss'
import Text from '../Text/Text'
export default function Review() {
  return (
    <div className={classes.Review}>
      <div className={classes.Title}>
        <Text type='headline4' color='light'>
          Review
        </Text>
      </div>
      <div className={classes.Overline}>
        <Text type='overline' color='light'>
          Review
        </Text>
      </div>
      <div className={classes.Body}>
        <Text type='body2' color='light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quas reprehenderit, quis id ut voluptas praesentium incidunt magnam
          veniam quibusdam!
        </Text>
      </div>
    </div>
  )
}
