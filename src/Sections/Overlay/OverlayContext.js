import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = createContext({})

export const OverlayContextProvider = ({ children }) => {
  const [overlayState, setOverlayState] = useState(false)
  const overlayContextValue = {
    state: overlayState,
    toggle: () => {
      setOverlayState(overlayState ? false : true)
    },
  }
  return <Provider value={overlayContextValue}>{children}</Provider>
}
OverlayContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const OverlayContextConsumer = ({ children }) => {
  return <Consumer>{children}</Consumer>
}
OverlayContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
}
