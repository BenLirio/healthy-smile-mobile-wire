import React from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import { OverlayContextConsumer } from './OverlayContext'

export const Overlay = () => (
  <OverlayContextConsumer>
    {context => {
      return (
        <>
          <Backdrop open={context.state} onClick={context.toggle}></Backdrop>
          <SideDrawer open={context.state} onClick={context.toggle} />
        </>
      )
    }}
  </OverlayContextConsumer>
)
export default Overlay
