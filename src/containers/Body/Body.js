import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Post from '../../components/Post/Post'
import Cta from '../../components/Cta/Cta'
import Feature from '../../components/Feature/Feature'

export default function Body() {
  return (
    <div className={classes.Body}>
      <Post>
        <Section>
          <Feature />
          <Feature />
          <Feature />
        </Section>
        <Cta></Cta>
        <Card />
        <Section></Section>
        <Card />
      </Post>
    </div>
  )
}
