import { createContext, useContext, useReducer } from 'react'
import useAppReducer from '../hooks/useAppReducer'

const AppStateContext = createContext()
const AppDispatchContext = createContext()

export default function AppProvider({ children }) {
  const { appReducer, initState } = useAppReducer()
  const [state, dispatch] = useReducer(appReducer, initState)

  return (
    <AppStateContext.Provider value={ state }>
      <AppDispatchContext.Provider value={ dispatch }>
        { children }
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

export { useAppState, useAppDispatch, useApp }