import React from 'react'
import Aux from '../../Hoc/Aux/Aux'
import Header from '../../components/Sections/Header/Header'
import Footer from '../../components/Sections/Footer/Footer'
import Body from '../../components/Sections/Body/Body'

export default function Home() {
  return (
    <Aux>
      <Header />
      <Body />
      <Footer />
    </Aux>
  )
}
