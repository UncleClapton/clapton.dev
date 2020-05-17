/* eslint-disable no-magic-numbers */
import React from 'react'
import { animated } from 'react-spring'

import '../css/app.css'


import useParallaxSpring from '../hooks/useParallaxSpring'

const backgroundPos = (xPos, yPos) => {
  return `translate3d(${xPos / 250}px, ${yPos / 250}px, 0)`
}



// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  const [parallaxSpring, handleMouseEvent] = useParallaxSpring({
    origin: [50, 31.8],
    deadzone: [-130, 360, 130, -360],
    limit: [-400, 800, 400, -800],
  })

  return (
    <div id="app" onMouseMove={handleMouseEvent}>
      <animated.div className="background" style={{ transform: parallaxSpring.rawPos.interpolate(backgroundPos) }} />
      <div className="card-positioner">
        <Component {...pageProps} spring={parallaxSpring} />
      </div>
    </div>
  )
}
