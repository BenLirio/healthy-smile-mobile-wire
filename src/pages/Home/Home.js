import React from 'react'
import classes from './Home.module.scss'
import FeatureImage from '../../components/FeatureImage/FeatureImage'
import Feature from '../../components/Feature/Feature'
import Testimonials from '../../components/Testimonials/Testimonials'
import About from '../../components/About/About'
import Cta from '../../components/Cta/Cta'
import OurDoctors from '../../components/OurDoctors/OurDoctors'
import Maps from '../../components/Maps/Maps'

export const Home = () => (
  <main className={classes.Main}>
    <FeatureImage />
    <Feature />
    <Feature />
    <Feature />
    <Testimonials />
    <About />
    <Cta />
    <OurDoctors />
    <Maps />
  </main>
)
