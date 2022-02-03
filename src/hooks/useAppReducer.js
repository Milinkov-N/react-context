import { useReducer } from 'react'

export default function useAppReducer() {
  const initState = {
    isPlaying: true,
    bannerIsShowing: false,
    promoIsOpened: false,
    dialogIsCompleted: false,
    sliderIsShowing: false,
    numberIsCompleted: false,
    numberIsValid: true,
    policyIsChecked: false,
    selectedKey: 5,
  }

  function appReducer(state, action) {
    switch (action.type) {
      case 'TO_FALSE': {
        targetErrorHandler(state[action.target])
        state[action.target] = false

        return { ...state }
      }
      case 'TO_TRUE': {
        targetErrorHandler(state[action.target])
        state[action.target] = true

        return { ...state }
      }
      case 'TOGGLE': {
        targetErrorHandler(state[action.target])
        const newState = { ...state }
        newState[action.target] = !newState[action.target]

        return { ...newState }
      }
      case 'OPEN_PROMO': {
        return {
          ...state,
          isPlaying: false,
          bannerIsShowing: false,
          promoIsOpened: true
        }
      }
      case 'CLOSE_PROMO': {
        return { ...state, isPlaying: true, promoIsOpened: false }
      }
      case 'SET_KEY': {
        return { ...state, selectedKey: action.key }
      }
      default: {
        throw new Error(`Unhandled action type: ${ action.type }`)
      }
    }
  }

  function targetErrorHandler(target) {
    if(typeof target === 'undefined') {
      throw new Error(`Unhandled action target: ${ target }`)
    }
  }

  const [state, dispatch] = useReducer(appReducer, initState)

  return [state, dispatch]
}