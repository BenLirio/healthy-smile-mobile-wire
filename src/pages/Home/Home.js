import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeatureImage from '../../components/FeatureImage/FeatureImage'

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
  <Container>
    <Row>
      <Col>
        <FeatureImage />
      </Col>
    </Row>
    <Row noGutters>
      <Col>
        <Blank2 />
      </Col>
      <Col>
        <Blank2 />
      </Col>
      <Col>
        <Blank2 />
      </Col>
    </Row>
    <Row>
      <Col>
        <Blank3 />
      </Col>
    </Row>
    <Row noGutters>
      <Col xs={4}>
        <Blank4 />
      </Col>
      <Col xs={8}>
        <Blank4 />
      </Col>
    </Row>
    <Row>
      <Col>
        <Blank2 />
      </Col>
    </Row>
    <Row>
      <Col>
        <Blank4 />
      </Col>
    </Row>
  </Container>
)
