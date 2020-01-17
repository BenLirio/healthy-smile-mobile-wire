import React from 'react'
import classes from './Body.module.scss'
import { Switch, Route } from 'react-router-dom'
import { Home, About } from '../../pages/index'
export const Body = () => (
  <div className={classes.Body}>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
)
