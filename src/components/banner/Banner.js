import { useApp } from '../../contexts/AppContext'
import { CSSTransition } from 'react-transition-group'
import './banner.css'

export default function Banner() {
  const [state, dispatch] = useApp()

  const openPromo = () => {
    dispatch({ type: 'OPEN_PROMO' })
  } 
  return (
    <CSSTransition
      in={ state.bannerIsShowing }
      timeout={ 300 }
      classNames="banner"
      unmountOnExit
    >
      <div className="banner">
        <h2 className="banner__title">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </h2>
        <img
          className="banner__image" 
          src="/qr-code.jpg"
          alt="qr-code"
        />
        <span className="banner__desc">
          Сканируйте QR-код или нажмите ОК
        </span>
        <button className="banner__btn" onClick={ openPromo }>OK</button>
      </div>
    </CSSTransition>
  )
}