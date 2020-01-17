import React, { createContext } from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import { OverlayContextConsumer } from './OverlayContext'
export default function Overlay() {
  return (
    <OverlayContextConsumer>
      {context => {
        return (
          <>
            <Backdrop open={context.state} onClick={context.toggle}></Backdrop>
            <SideDrawer
              open={context.state}
              onClick={context.toggle}
            ></SideDrawer>
          </>
        )
      }}
    </OverlayContextConsumer>
  )
}
