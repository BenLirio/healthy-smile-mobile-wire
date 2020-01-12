import { useLayoutEffect, useState } from 'react'
const mobileBreakPoint = 600
export default function useDeviceData() {
  const [deviceData, setDeviceData] = useState({
    device: window.innerWidth > mobileBreakPoint ? 'desktop' : 'mobile',
    size: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  })
  useLayoutEffect(() => {
    function updateSize() {
      setDeviceData({
        device: window.innerWidth > mobileBreakPoint ? 'desktop' : 'mobile',
        size: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return deviceData
}
