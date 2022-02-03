import usePromoContext from '../../contexts/PromoContext'
import { Keyboard } from '..'
import './dialog.css'

export default function Dialog({ numberComfirmHandler  }) {
  const { number: n, numberIsCompleted, numberIsValid, policyIsChecked, selectedKey } = usePromoContext()

  const isDisabled = numberIsCompleted && numberIsValid && policyIsChecked

  return (
    <>
      <h2 className="dialog__header">
        Введите ваш номер мобильного телефона
      </h2>
      <div className={ `dialog__number ${ !numberIsValid ? 'dialog__number_error' : '' }`}>
        { `+7 (${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}-${n[8]}${n[9]}` }
      </div>
      <span className="dialog__desc">и с Вами свяжется наш менеждер для дальнейшей консультации</span>
      <Keyboard />
      { numberIsValid ? <Checkbox /> : <Error /> }
      <button
        className={ `dialog__btn ${ selectedKey === 12 ? 'selected' : '' }` }
        disabled={ !isDisabled }
        onClick={ numberComfirmHandler }
      >
        Подтвердить номер
      </button>
    </>
  )
}

function Checkbox() {
  const { policyIsChecked, setPolicyIsChecked } = usePromoContext()

  return (
    <div className="dialog__agreement">
      <input type='checkbox' name='checkbox' id='checkbox' checked={ policyIsChecked } onChange={ e => setPolicyIsChecked(e.target.checked) } />
      <label htmlFor='checkbox'>Согласие на обработку персональных данных</label>
    </div>
  )
}

function Error() { 
  return <span className="dialog__error">Неверно введён номер</span>
}
