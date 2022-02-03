import { useNumber } from '../contexts/AppContext'

export default function useKeyClick() {
  const [,setNumber] = useNumber()

  function handleClick(id, value) {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber]
      const nextChar = prevNumber.findIndex(el => el === '_')
      
      // Если курсор находится в конце номера
      if (nextChar === -1) {
        // Если нажата кнопкть 'Стереть', то заменяем последний символ на нижнее подчеркивание
        if(id === 10) {
          newNumber.pop()
          return [...newNumber, '_']
        }

        return prevNumber
      }
      
      // Если нажата кнопкть 'Стереть'
      if(id === 10) {
        // Если курстор стоит на первой цифре,то  не мутируем state
        if (nextChar === 0) return prevNumber
    
        newNumber[nextChar - 1] = '_'
        return [...newNumber]
      }
    
      newNumber[nextChar] = value
    
      return [...newNumber]
    })
  }

  return handleClick
}