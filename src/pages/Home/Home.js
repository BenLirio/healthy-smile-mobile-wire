import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import FeatureImage from '../../components/FeatureImage/FeatureImage'
import Feature from '../../components/Feature/Feature'
import AboutImageList from '../../components/AboutImageList/AboutImageList'
import Cta from '../../components/Cta/Cta'
import RateABiz from '../../components/RateABiz/RateABiz'
import Associations from '../../components/Associations/Associations'
import About from '../../components/About/About'
import Maps from '../../components/Maps/Maps'

const Blank = () => (
  <div
    style={{
      height: '100px',
      border: '2px solid #000',
      background: '#292',
    }}></div>
)
const Blank2 = () => (
  <div
    style={{
      height: '200px',
      border: '2px solid #000',
      background: '#292',
    }}></div>
)
const Blank3 = () => (
  <div
    style={{
      height: '300px',
      border: '2px solid #000',
      background: '#292',
    }}></div>
)
const Blank4 = () => (
  <div
    style={{
      height: '400px',
      border: '2px solid #000',
      background: '#292',
    }}></div>
)

export const Home = () => (
  <>
    <FeatureImage />
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={4}>
          <Feature icon='FaClock' />
        </Col>
        <Col xs={4}>
          <Feature icon='FaHeart' />
        </Col>
        <Col xs={4}>
          <Feature icon='FaTooth' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Associations />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <About />
        </Col>
        <Col xs={8}>
          <AboutImageList />
        </Col>
      </Row>
      <Row>
        <Col>
          <Cta />
        </Col>
      </Row>
      <Row>
        <Col>
          <Maps />
        </Col>
      </Row>
    </Container>
  </>
)
