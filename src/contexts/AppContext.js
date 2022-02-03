import { createContext, useContext, useState, useEffect } from 'react'
import useAppReducer from '../hooks/useAppReducer'

const AppStateContext = createContext()
const AppDispatchContext = createContext()
const NumberContext = createContext()

export default function AppProvider({ children }) {
  const [state, dispatch] = useAppReducer()
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])

  useEffect(() => {
    if (number[number.length - 1] !== '_') {
      dispatch({ type: 'TO_TRUE', target: 'numberIsCompleted' })
    } else {
      dispatch({ type: 'TO_FALSE', target: 'numberIsCompleted' })
    }
  }, [number])

  return (
    <AppStateContext.Provider value={ state }>
      <AppDispatchContext.Provider value={ dispatch }>
        <NumberContext.Provider value={ [number, setNumber] }>
          { children }
        </NumberContext.Provider>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = useContext(AppStateContext)

  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider')
  }

  return context
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext)

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider')
  }

  return context
}

function useApp() {
  const state = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }

  return [state, dispatch]
}

function useNumber() {
  const [number, setNumber] = useContext(NumberContext)

  if (number === undefined || setNumber === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }

  return [number, setNumber]
}

export { useAppState, useAppDispatch, useApp, useNumber }