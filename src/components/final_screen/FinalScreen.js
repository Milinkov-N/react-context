import { useEffect } from 'react'
import useAppContext from '../../contexts/AppContext'
import './final_screen.css'

export default function FinalScreen() {
  const { setSliderIsShowing } = useAppContext()

  useEffect(() => {
    setTimeout(() => setSliderIsShowing(true), 3000)
  }, [])

  return (
    <div className="final">
      <h2 className="final__header">Заявка принята</h2>
      <p className="final__desc">Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.</p>
    </div>
  )
}