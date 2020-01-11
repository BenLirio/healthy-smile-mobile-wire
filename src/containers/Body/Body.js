import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Post from '../../components/Post/Post'
import Text from '../../components/Text/Text'

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
        <Section>
          <Text title='about'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            amet, voluptatum commodi aut excepturi necessitatibus?
          </Text>
          <Section>
            <Card />
            <Card />
            <Card />
            <Card />
          </Section>
        </Section>
        <Card />
        <Card />
      </Post>
    </div>
  )
}
