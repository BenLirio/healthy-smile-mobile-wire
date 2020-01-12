import React from 'react'
import Aux from '../../Hoc/Aux/Aux'
import FeatureImage from '../../components/Image/FeatureImage/FeatureImage'

import Body from '../../components/Sections/Body/Body'

export default function Home() {
  return (
    <Aux>
      <FeatureImage />
      <Body />
    </Aux>
  )
}
