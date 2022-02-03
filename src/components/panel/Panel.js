import { useAppState } from '../../contexts/AppContext'
import { Dialog, FinalScreen } from '..'
import { CSSTransition } from 'react-transition-group'
import './panel.css'

export default function Panel() {
  const state = useAppState()

  const { sliderIsShowing, dialogIsCompleted } = state

  return (
    <CSSTransition
    in={ !sliderIsShowing }
    timeout={ 300 }
    classNames="panel"
    unmountOnExit
    >
      <div className="panel">
        <div className="panel__wrapper">
          { 
            !dialogIsCompleted
              ? <Dialog />
              : <FinalScreen />
          }
        </div>
      </div>
    </CSSTransition>
  )
}