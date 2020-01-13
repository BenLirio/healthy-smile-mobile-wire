import React from 'react'
import classes from './Feature.module.scss'
import Text from '../Text/Text'
export default function Feature() {
  return (
    <div className={classes.Feature}>
      <div className={classes.Icon}></div>
      <div className={classes.Text}>
        <Text type='headline4'>Title</Text>
      </div>
      <div style={{ flex: '1 1 auto' }}></div>
      <div className={classes.Button}>
        <Text type='button'>view</Text>
      </div>
    </div>
  )
}
