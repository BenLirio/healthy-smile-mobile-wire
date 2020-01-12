import React from 'react'
import classes from './About.module.scss'
import Text from '../Text/Text'
export default function About() {
  return (
    <div className={classes.About}>
      <div className={classes.Title}>
        <Text type='headline2'>About us</Text>
      </div>
      <div className={classes.Body}>
        <Text type='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          possimus soluta, asperiores vel debitis quisquam ab. Facilis quis
          molestias pariatur enim distinctio maiores doloribus officiis
          asperiores recusandae illum. Assumenda, ducimus.
        </Text>
      </div>
    </div>
  )
}
