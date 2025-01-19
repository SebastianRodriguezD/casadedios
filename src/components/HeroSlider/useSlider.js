import { useReducer, useEffect } from 'react'

const sliderReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return (state + 1) % action.length
    case 'RESET':
      return 0
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

const useSlider = (length, intervalTime = 5000) => {
  const [currentIndex, dispatch] = useReducer(sliderReducer, 0)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'NEXT', length })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [intervalTime, length])

  return {
    currentIndex,
    nextSlide: () => dispatch({ type: 'NEXT', length }),
    resetSlide: () => dispatch({ type: 'RESET' })
  }
}

export default useSlider
