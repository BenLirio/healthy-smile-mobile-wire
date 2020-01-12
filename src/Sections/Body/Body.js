import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, About } from '../../pages/index'
export const Body = () => (
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
)
