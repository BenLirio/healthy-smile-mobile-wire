import React from 'react'
import classes from './Map.module.scss'
import Text from '../Text/Text'
export default function Map() {
  return (
    <div className={classes.Map}>
      <div className={classes.Title}>
        <Text type='headline4' color='light'>
          Where to find us
        </Text>
      </div>
      <div className={classes.View}></div>
    </div>
  )
}
