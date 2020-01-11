import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Post from '../../components/Post/Post'
export default function Body() {
  return (
    <div className={classes.Body}>
      <Post>
        <Section>
          <Card />
          <Card />
          <Card />
        </Section>
        <Card />
      </Post>
    </div>
  )
}
