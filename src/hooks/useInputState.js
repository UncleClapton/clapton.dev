import { useState } from 'react'

const useInputState = (initialState) => {
  const [inputState, setState] = useState(initialState)

  const handleChange = (event) => {
    setState(event?.target?.value)
  }

  return [inputState, handleChange]
}




export default useInputState
