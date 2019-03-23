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


const backgroundPos = (clientX, clientY) => `translate3d(${clientX / 250}px, ${clientY / 250}px, 0)`
const cardPos = (clientX, clientY) => `translate3d(${clientX / 20}px, ${clientY / 20}px, 0)`
const textPos = (clientX, clientY) => `translate3d(${clientX / 15}px, ${clientY / 15}px, 0)`


const App = () => {
  const [parallaxSpring, setPos] = useParallaxSpring()

  return (
    <div
      id="app"
      onMouseMove={setPos}>
      <animated.div className="background" style={{ transform: parallaxSpring.bgxy.interpolate(backgroundPos) }} />
      <div className="titlecard-positioner">
        <animated.div className="titlecard" style={{ transform: parallaxSpring.xy.interpolate(cardPos) }}>
          <animated.div className="titlecard-content" style={{ transform: parallaxSpring.xy.interpolate(textPos) }}>
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
