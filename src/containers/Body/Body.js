import React from 'react'
import classes from './Body.module.scss'
import Card from '../../components/Card/Card'
import Section from '../../components/Section/Section'
import Post from '../../components/Post/Post'
import H1 from '../../components/Text/H1/H1'
import H2 from '../../components/Text/H2/H2'
import H3 from '../../components/Text/H3/H3'
import H4 from '../../components/Text/H4/H4'
import H5 from '../../components/Text/H5/H5'
import H6 from '../../components/Text/H6/H6'
import Subtitle1 from '../../components/Text/Subtitle1/Subtitle1'
import Subtitle2 from '../../components/Text/Subtitle2/Subtitle2'
import P1 from '../../components/Text/P1/P1'
import P2 from '../../components/Text/P2/P2'
import ButtonText from '../../components/Text/ButtonText/ButtonText'
import Caption from '../../components/Text/Caption/Caption'
import Overline from '../../components/Text/Overline/Overline'

export default function Body() {
  return (
    <div className={classes.Body}>
      <Post>
        <H1>new</H1>
        <H2>test</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>
        <Subtitle1>Subtitle1</Subtitle1>
        <Subtitle2>Subtitle2</Subtitle2>
        <P1>P1</P1>
        <P2>P2</P2>
        <ButtonText>ButtonText</ButtonText>
        <Caption>Caption</Caption>
        <Overline>Overline</Overline>
        <Section>
          <Card />
          <Card />
          <Card />
        </Section>
        <Card />
        <Section>
          <H1>section</H1>
        </Section>
        <Card />
      </Post>
    </div>
  )
}
