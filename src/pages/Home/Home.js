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

export const Home = () => (
  <>
    <FeatureImage />
    <Container>
      <Row className='justify-content-md-center'>
        <Col sm={4}>
          <Feature icon='FaClock' />
        </Col>
        <Col sm={4}>
          <Feature icon='FaHeart' />
        </Col>
        <Col sm={4}>
          <Feature icon='FaTooth' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Associations />
        </Col>
      </Row>
      <Row>
        <Col>
          <RateABiz />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <About />
        </Col>
        <Col sm={8}>
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
