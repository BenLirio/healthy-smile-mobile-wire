import React from 'react'
import Aux from '../../../Hoc/Aux/Aux'
import TopNav from '../../Nav/TopNav/TopNav'
import FeatureImage from '../../Image/FeatureImage/FeatureImage'

export default function Header() {
  return (
    <Aux>
      <TopNav />
      <FeatureImage />
    </Aux>
  )
}
