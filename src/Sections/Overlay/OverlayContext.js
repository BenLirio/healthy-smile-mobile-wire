import React, { createContext, useState } from 'react'
const { Provider, Consumer } = createContext({})

export const OverlayContextProvider = ({ children }) => {
  const [overlayState, setOverlayState] = useState(true)
  const overlayContextValue = {
    state: overlayState,
    toggle: () => {
      setOverlayState(overlayState ? false : true)
    }
  }
  return <Provider value={overlayContextValue}>{children}</Provider>
}

export const OverlayContextConsumer = ({ children }) => {
  return <Consumer>{children}</Consumer>
}
