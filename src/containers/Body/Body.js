import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
export default function Body() {
  return (
    <div className={classes.Body}>
      <Section>
        <Card />
        <Card />
        <Card />
      </Section>
    </div>
  )
}
