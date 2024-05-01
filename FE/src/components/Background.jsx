// Purpose: This file contains the Background component which is responsible for rendering the background of the application.

import { useEffect } from 'react'

export default function Background() {
  useEffect(() => {
    // Initialize and utilize the functionality from the external JS file
    // eslint-disable-next-line no-undef
    const gradient = new Gradient()
    gradient.initGradient('#canvas')

    return () => {
      // Perform cleanup if necessary
    }
  }, [])

  return (
    <>
      <div className="background--custom">
        <canvas id="canvas"></canvas>
      </div>
    </>
  )
}
