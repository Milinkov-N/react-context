import { useEffect } from 'react'
import { useAppDispatch } from '../../contexts/AppContext'
import './final_screen.css'

export default function FinalScreen() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'TO_TRUE', target: 'sliderIsShowing' })
      dispatch({ type: 'SET_KEY', key: 14 })
    }, 3000)
  }, [])

  return (
    <div className="final">
      <h2 className="final__header">
        Заявка принята
      </h2>
      <p className="final__desc">
        Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  )
}