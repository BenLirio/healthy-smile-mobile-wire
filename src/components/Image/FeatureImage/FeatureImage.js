import React from 'react'
import Image from '../Image'
import FeatureImageContainer from './FeatureImageContainer'

export default function FeatureImage() {
  return FeatureImageContainer(() => {
    return <Image></Image>
  })
}
