import React from 'react'
import classes from './Cta.module.scss'
import Text from '../Text/Text'
export default function Cta() {
  return (
    <div className={classes.Cta}>
      <div className={classes.Title}>
        <Text type='headline4' color='light'>
          test
        </Text>
      </div>
      <div className={classes.Text}>
        <Text type='body2' color='light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </Text>
      </div>
      <div className={classes.Buttons}>
        <div className={classes.Button}>
          <Text type='button'>button</Text>
        </div>
        <div className={classes.Button}>
          <Text type='button'>other</Text>
        </div>
        <div style={{ flex: '3 1 auto' }}></div>
      </div>
    </div>
  )
}
