import './promo.css'
// import { Panel, Slider } from '..'
import { useApp } from '../../contexts/AppContext'
import usePromoContext from '../../contexts/PromoContext'
// import { CSSTransition } from 'react-transition-group'

export default function Promo() {
  const [state, dispatch] = useApp()

  const closePromo = () => dispatch({ type: 'CLOSE_PROMO' })

  return (
    <div className="promo__wrapper">
      {/* { sliderIsShowing ? <Slider /> : <img className='promo__backgorund-image' src='/slide-1.jpg' /> } */}
      <img className='promo__backgorund-image' src='/slide-1.jpg' />
      {/* <Panel /> */}
      <button
        // className={ `promo__close-btn ${ selectedKey === 13 ? 'selected' : '' }` }
        className={ `promo__close-btn` }
        onClick={ closePromo }
      >
        &times;
      </button>
      <QRCode sliderIsShowing={ state.sliderIsShowing } />
    </div>
  )
}

function QRCode({ sliderIsShowing }) {
  return (
    <div className="promo__qr-code">
      <p>Сканируйте qr-код для получения дополнительной информации</p>
      <img src="/qr-code.jpg" alt='qr-code' />
    </div>
  )
}

{/* <CSSTransition
  in={ !sliderIsShowing }
  timeout={ 300 }
  classNames="qr-code"
  unmountOnExit
>
  <div className="promo__qr-code">
    <p>Сканируйте qr-код для получения дополнительной информации</p>
    <img src="/qr-code.jpg" alt='qr-code' />
  </div>
</CSSTransition> */}