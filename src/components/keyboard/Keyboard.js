import usePromoContext from '../../contexts/PromoContext'
import './keyboard.css'

export default function Keyboard() {
  const { handleKeyClick, selectedKey } = usePromoContext()

  const keys = [
    {
      id: 1,
      value: '1',
    },
    {
      id: 2,
      value: '2',
    },
    {
      id: 3,
      value: '3',
    },
    {
      id: 4,
      value: '4',
    },
    {
      id: 5,
      value: '5',
    },
    {
      id: 6,
      value: '6',
    },
    {
      id: 7,
      value: '7',
    },
    {
      id: 8,
      value: '8',
    },
    {
      id: 9,
      value: '9',
    },
    {
      id: 10,
      value: 'Стереть',
    },
    {
      id: 11,
      value: '0',
    },
  ]

  return (
    <div className="keyboard">
      {keys.map(key => (
        <button
          key={ key.id }
          className={ `keyboard__key ${ key.id === 10 ? 'col-span-2' : '' } ${ selectedKey === key.id ? 'selected' : '' }` }
          id={ key.id }
          onClick={ () => handleKeyClick(key.id, key.value) }
          onKeyUp={ e => e.target.blur() }
          onKeyDown={ e => console.log(e.key) }
        >
          { key.value }
        </button>
      ))}
    </div>
  )
}