/* eslint-disable no-magic-numbers */
// Module Imports
import React from 'react'
import { animated } from 'react-spring'





const cardPos = (xPos, yPos) => {
  return `translate3d(${xPos / 20}px, ${yPos / 20}px, 0)`
}

const textPos = (xPos, yPos) => {
  return `translate3d(${xPos / 15}px, ${yPos / 15}px, 0)`
}





function HomePage ({ spring }) {
  return (
    <animated.div className="card text-center" style={{ transform: spring.pos.interpolate(cardPos) }}>
      <animated.div className="card-content card-wrap" style={{ transform: spring.pos.interpolate(textPos) }}>
        <span className="ptypnt-darkyellow">{'clapton'}</span>{'.'}<span className="ptypnt-darkmagenta">{'dev'}</span><br />
        <span className="card-tagline">
          <a href="https://github.com/uncleclapton">{'Developer'}</a>{' - SysAdmin - '}<a href="https://www.fuelrats.com/">{'FuelRat'}</a>
        </span>
      </animated.div>
    </animated.div>
  )
}




export default HomePage
