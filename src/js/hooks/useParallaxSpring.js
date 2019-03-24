/* eslint-disable no-magic-numbers */
import { useSpring } from 'react-spring'

const calcPos = (clientX, clientY) => [
  clientX - (window.innerWidth * 0.5),
  clientY - (window.innerHeight * 0.5),
]


const calcAdjPos = (clientX, clientY, origin, limit, deadzone) => {
  const [xOrigin, yOrigin] = origin

  let pos = [
    clientX - (window.innerWidth * (xOrigin / 100)),
    clientY - (window.innerHeight * (yOrigin / 100)),
  ]

  if (limit && limit.length === 4) {
    const [topLimit, rightLimit, bottomLimit, leftLimit] = limit
    pos = [
      Math.max(Math.min(pos[0], rightLimit), leftLimit),
      Math.max(Math.min(pos[1], bottomLimit), topLimit),
    ]
  }

  if (deadzone && deadzone.length === 4) {
    const [topDZ, rightDZ, bottomDZ, leftDZ] = deadzone

    if (pos[0] >= leftDZ && pos[0] <= rightDZ && pos[1] >= topDZ && pos[1] <= bottomDZ) {
      pos = [0, 0]
    }
  }

  return pos
}

const useParallaxSpring = ({
  origin,
  deadzone,
  limit,
  config,
}) => {
  const [parallaxSpring, setParallax] = useSpring(() => ({
    adjPos: [0, 0],
    pos: [0, 0],
    config: {
      mass: 5,
      tension: 550,
      friction: 140,
      ...config,
    },
  }))

  const handleMouseMove = ({ clientX, clientY }) => setParallax({
    pos: calcPos(clientX, clientY),
    ...(origin
      ? {
        adjPos: calcAdjPos(
          clientX,
          clientY,
          origin,
          limit,
          deadzone
        ),
      }
      : {}),
  })

  return [parallaxSpring, handleMouseMove]
}




export default useParallaxSpring
