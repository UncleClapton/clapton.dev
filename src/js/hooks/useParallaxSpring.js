/* eslint-disable no-magic-numbers */
import { useSpring } from 'react-spring'

const calcBgPos = (clientX, clientY) => [
  clientX - (window.innerWidth / 2),
  clientY - (window.innerHeight / 2),
]


const calcPos = (clientX, clientY) => [
  Math.max(Math.min(clientX - (window.innerWidth / 2), 800), -800),
  Math.max(Math.min((clientY - (window.innerHeight / 2)) + (window.innerHeight * 0.1767578125), 400), -400),
]

const useParallaxSpring = () => {
  const [parallaxSpring, setParallax] = useSpring(() => ({
    bgxy: [0, 0],
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140,
    },
  }))

  const setPos = ({ clientX, clientY }) => setParallax({
    bgxy: calcBgPos(clientX, clientY),
    xy: calcPos(clientX, clientY),
  })

  return [parallaxSpring, setPos]
}




export default useParallaxSpring
