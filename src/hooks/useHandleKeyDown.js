import { useCallback } from 'react'
import { useKeyDown } from 'react-keyboard-input-hook'
import useKeyClick from './useKeyClick'
import { useApp } from '../contexts/AppContext'

export default function useHandleKeyDown() {
  const handleKeyClick = useKeyClick()
  const [state, dispatch] = useApp()

  const { selectedKey, numberIsValid, policyIsChecked, numberIsCompleted } = state

  const handleKeyDown = useCallback(({ keyName }) => {
    switch (keyName) {
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
      case 'Digit0': {
        const keyDigit = keyName.substring(5)
        handleKeyClick(parseInt(keyDigit), parseInt(keyDigit))
        break;
      }
      case 'ArrowDown': {
        handleArrowDown()
        break;
      }
      case 'ArrowUp': {
        handleArrowUp()
        break;
      }
      case 'ArrowLeft': {
        handleArrowLeft()
        break;
      }
      case 'ArrowRight': {
        handleArrowRight()
        break;
      }
      case 'Enter': {
        handleEnter()
        break;
      }
      case 'Backspace':
        handleKeyClick(10, 10)
        break;
      default:
        break;
    }
  }, [selectedKey, numberIsValid, policyIsChecked])

  function handleArrowDown() {
    switch (selectedKey) {
      case 13:
      case 12: {
        dispatch({ type: 'SET_KEY', key: 1 })
        break;
      }
      case 11:
      case 10:
      case 9: {
        dispatch({ type: 'SET_KEY', key: 12 })
        break;
      } 
      case 8:
      case 7: { 
        dispatch({ type: 'SET_KEY', key: 10 })
        break;
      } 
      default:{
        dispatch({ type: 'SET_KEY', key: selectedKey + 3 })
        break;
      }
    }
  }
  
  function handleArrowUp() {
    switch (selectedKey) {
      case 13: {
        dispatch({ type: 'SET_KEY', key: 12 })
        break;
      }
      case 12: {
        dispatch({ type: 'SET_KEY', key: 10 })
        break;
      }
      case 11: {
        dispatch({ type: 'SET_KEY', key: 9 })
        break;
      }
      case 3:
      case 2:
      case 1: {
        dispatch({ type: 'SET_KEY', key: 12 })
        break;
      }
      default: {
        dispatch({ type: 'SET_KEY', key: selectedKey - 3 })
        break;
      }
    }
  }
  
  function handleArrowLeft() {
    if (selectedKey === 1){
      dispatch({ type: 'SET_KEY', key: 13 })
    }
  
    dispatch({ type: 'SET_KEY', key: selectedKey - 1 })
  }
  
  function handleArrowRight() {
    switch (selectedKey) {
      case 11: {
        dispatch({ type: 'SET_KEY', key: 12 })
        break;
      }
      case 12: {
        dispatch({ type: 'SET_KEY', key: 13 })
        break;
      }
      case 13: {
        dispatch({ type: 'SET_KEY', key: 1 })
        break;
      }
      default:{
        dispatch({ type: 'SET_KEY', key: selectedKey + 1 })
        break;
      }
    }
  }
  
  function handleEnter() {
    switch (selectedKey) {
      case 13: {
        dispatch({ type: 'CLOSE_PROMO' })
        break;
      }
      case 12: {
        const isDisabled = numberIsValid && numberIsCompleted && policyIsChecked
        if (!isDisabled) return
  
        dispatch({ type: 'TO_TRUE', target: 'dialogIsCompleted' })
        break;
      }
      case 11: {
        handleKeyClick(selectedKey, 0)
        break;
      }
      default:{
        handleKeyClick(selectedKey, selectedKey)
        break;
      }
    }
  }

  useKeyDown(handleKeyDown)
}