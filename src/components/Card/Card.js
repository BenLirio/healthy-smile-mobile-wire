import React from 'react'
import classes from './Card.module.scss'
import getClassNames from '../../lib/getClassNames'
export default function Card(props) {
  const className = getClassNames(classes, props.class, 'Card')
  console.log(className)
  return (
    <div className={className}>
      <div></div>
    </div>
  )
}
