import React from 'react'
import classes from './Footer.module.scss'
import Text from '../../components/Text/Text'

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Title}>
        <Text type='headline5' color='light'>
          Hours
        </Text>
      </div>
      <div className={classes.Mon}>
        <Text color='light'>Monday</Text>
      </div>
      <div className={classes.MonT}>
        <Text color='light'>9-5</Text>
      </div>
      <div className={classes.Tue}>
        <Text color='light'>Tuesday</Text>
      </div>
      <div className={classes.TueT}>
        <Text color='light'>9-5</Text>
      </div>
      <div className={classes.Wed}>
        <Text color='light'>Wednesday</Text>
      </div>
      <div className={classes.WedT}>
        <Text color='light'>9-5</Text>
      </div>
      <div className={classes.Trs}>
        <Text color='light'>Thursday</Text>
      </div>
      <div className={classes.TrsT}>
        <Text color='light'>9-6</Text>
      </div>
      <div className={classes.Fri}>
        <Text color='light'>Friday</Text>
      </div>
      <div className={classes.FriT}>
        <Text color='light'>9-6</Text>
      </div>
      <div className={classes.Sat}>
        <Text color='light'>Saturday</Text>
      </div>
      <div className={classes.SatT}>
        <Text color='light'>10-6</Text>
      </div>
      <div className={classes.Sun}>
        <Text color='light'>Sunday</Text>
      </div>
      <div className={classes.SunT}>
        <Text color='light'>Closed</Text>
      </div>
    </div>
  )
}
