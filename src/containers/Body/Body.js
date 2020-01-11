import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Post from '../../components/Post/Post'
import Text from '../../components/Text/Text'
import Cta from '../../components/Cta/Cta'

export default function Body() {
  return (
    <div className={classes.Body}>
      <Post>
        <Cta></Cta>
        <Section>
          <Card />
          <Card />
          <Card />
        </Section>
        <Card />
        <Section></Section>
        <Card />
      </Post>
    </div>
  )
}
