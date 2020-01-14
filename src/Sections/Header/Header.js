import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Aux from '../../Hoc/Aux'
import TopNav from '../../components/TopNav/TopNav'
import FeatureImage from '../../components/Image/FeatureImage/FeatureImage'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import BackDrop from '../../components/Backdrop/Backdrop'
export const Header = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const openSidebar = () => {
    setSideDrawerOpen(true)
  }
  const closeSidebar = () => {
    setSideDrawerOpen(false)
  }
  return (
    <Aux>
      <TopNav click={openSidebar} />
      <BackDrop click={closeSidebar} open={sideDrawerOpen} />
      <SideDrawer open={sideDrawerOpen} click={closeSidebar} />
      <Switch>
        <Route exact path='/'>
          <FeatureImage></FeatureImage>
        </Route>
      </Switch>
    </Aux>
  )
}
