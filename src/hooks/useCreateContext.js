import { createContext, useContext, useReducer } from 'react'
// import useAppReducer from '../hooks/useAppReducer'

export default function useCreateContext(reducer, initalState) {
  const StateContext = createContext()
  const DispatchContext = createContext()

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState)
  
    return (
      <StateContext.Provider value={ state }>
        <DispatchContext.Provider value={ dispatch }>
          { children }
        </DispatchContext.Provider>
      </StateContext.Provider>
    )
  }

  function useCustomState() {
    const context = useContext(StateContext)
  
    if (context === undefined) {
      throw new Error('useCustomState must be used within an AppProvider')
    }
  
    return context
  }
  
  function useCustomDispatch() {
    const context = useContext(DispatchContext)
  
    if (context === undefined) {
      throw new Error('useCustomDispatch must be used within an AppProvider')
    }
  
    return context
  }
  
  function useCustomContext() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
  
    if (state === undefined || dispatch === undefined) {
      throw new Error('useCustomContext must be used within an AppProvider')
    }
  
    return [state, dispatch]
  }

  return { Provider, useCustomState, useCustomDispatch, useCustomContext }
}