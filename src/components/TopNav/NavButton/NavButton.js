import pathNames from '../../../lib/config/pathNames'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import React, { useEffect } from 'react'

const NavButton = ({ clicked, link, pathName }) => {
  console.log('pathName', pathName)
  return (
    <BrowserRouter>
      <Button
        component={Link}
        color='inherit'
        to={pathNames[link]}
        onClick={() => clicked(link)}
        disabled={pathName === pathNames[link]}>
        {link}
      </Button>
    </BrowserRouter>
  )
}
export default withRouter(NavButton)
