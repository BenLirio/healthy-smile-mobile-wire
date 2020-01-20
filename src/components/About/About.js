import React from 'react'
import classes from './About.module.scss'

export const About = () => (
  <div className={classes.About}>
    <h1>Healthy Smile</h1>
    <p className={classes.Text}>
      We believe each person should experience dentistry as fun and as a treat
      in a completely relaxed setting. We constantly strive to be outstanding
      because we believe in making the world a better place for ourselves and
      the people we serve. We go to work everyday so that we can give each other
      and the people we care for something to smile about.
    </p>
  </div>
)
About.propTypes = {}
export default About
