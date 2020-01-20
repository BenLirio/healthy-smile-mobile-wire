import React from 'react'
import { Home, NewPatient, Services, Testimonials, About } from './'
import { Switch, Route } from 'react-router'
import isPage from '../components/Hoc/Page/isPage'

const CurrentPage = () => (
  <Switch>
    <Route exact path='/new-patient'>
      <NewPatient />
    </Route>
    <Route exact path='/services'>
      <Services />
    </Route>
    <Route exact path='/testimonials'>
      <Testimonials />
    </Route>
    <Route exact path='/about'>
      <About />
    </Route>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/'></Route>
  </Switch>
)

export default isPage(CurrentPage)
