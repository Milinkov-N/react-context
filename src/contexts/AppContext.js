import { createContext, useContext, useReducer, useState } from 'react'
import useAppReducer from '../hooks/useAppReducer'

const AppStateContext = createContext()
const AppDispatchContext = createContext()
const NumberContext = createContext()

export default function AppProvider({ children }) {
  const { appReducer, initState } = useAppReducer()
  const [state, dispatch] = useReducer(appReducer, initState)
  const [number, setNumber] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'])

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