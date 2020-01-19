import React from 'react'
import PropTypes from 'prop-types'
import classes from './Cta.module.scss'
import { Button } from 'react-bootstrap'

export const Cta = () => (
  <div className={classes.Card}>
    <Button className={classes.Button} size='lg'>
      View more
    </Button>
    <Button className={classes.Button} size='lg'>
      Call
    </Button>
  </div>
)
Cta.propTypes = {}
export default Cta
