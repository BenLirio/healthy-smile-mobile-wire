import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Aux from '../../Hoc/Aux'
import TopNav from '../../components/TopNav/TopNav'
import FeatureImage from '../../components/Image/FeatureImage/FeatureImage'
export const Header = () => (
  <Aux>
    <TopNav />
    <Switch>
      <Route exact path='/'>
        <FeatureImage></FeatureImage>
      </Route>
    </Switch>
  </Aux>
)
