/* eslint-disable no-magic-numbers */// this shit would get annoying otherwise.
// Module Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { animated } from 'react-spring'




// Component Imports
import useParallaxSpring from './hooks/useParallaxSpring'




/* DEVBLOCK:START */
window.console.debug = window.console.log.bind(window.console)
/* DEVBLOCK:END */


const backgroundPos = (xPos, yPos) => `translate3d(${xPos / 250}px, ${yPos / 250}px, 0)`
const cardPos = (xPos, yPos) => `translate3d(${xPos / 20}px, ${yPos / 20}px, 0)`
const textPos = (xPos, yPos) => `translate3d(${xPos / 15}px, ${yPos / 15}px, 0)`


const App = () => {
  const [parallaxSpring, setPos] = useParallaxSpring({
    origin: [50, 31.8],
    deadzone: [-130, 360, 130, -360],
    limit: [-400, 800, 400, -800],
  })

  return (
    <div
      id="app"
      onMouseMove={setPos}>
      <animated.div className="background" style={{ transform: parallaxSpring.rawPos.interpolate(backgroundPos) }} />
      <div className="titlecard-positioner">
        <animated.div className="titlecard" style={{ transform: parallaxSpring.pos.interpolate(cardPos) }}>
          <animated.div className="titlecard-content" style={{ transform: parallaxSpring.pos.interpolate(textPos) }}>
            <span className="ptypnt-darkyellow">clapton</span>.<span className="ptypnt-darkmagenta">dev</span><br />
            <span className="titlecard-tagline">
              <a href="https://github.com/uncleclapton">Developer</a> - SysAdmin - <a href="https://www.fuelrats.com/">FuelRat</a>
            </span>
          </animated.div>
        </animated.div>
      </div>
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('react-root'))
