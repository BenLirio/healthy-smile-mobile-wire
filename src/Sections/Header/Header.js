import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import { OverlayContextConsumer } from '../Overlay/OverlayContext'
export const Header = () => (
  <OverlayContextConsumer>
    {context => {
      return <TopNav onClick={context.toggle} />
    }}
  </OverlayContextConsumer>
)
export default Header
