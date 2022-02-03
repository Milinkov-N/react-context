import { useAppDispatch, useAppState } from '../contexts/AppContext'

export default function AppConsumer() {
  return (
    <>
      <States />
      <Actions />
    </>
  )
}

function States() {
  const state = useAppState()

  return (
    <>
      <h2>App consumer states:</h2>
      <table>
        <thead>
          <tr>
            <th>state</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Is playing: </td>
            <td>{ `${ state.isPlaying }` }</td>
          </tr>
          <tr>
            <td>Banner is showing: </td>
            <td>{ `${ state.bannerIsShowing }` }</td>
          </tr>
          <tr>
            <td>Promo is opened: </td>
            <td>{ `${ state.promoIsOpened }` }</td>
          </tr>
          <tr>
            <td>Dialog is completed: </td>
            <td>{ `${ state.dialogIsCompleted }` }</td>
          </tr>
          <tr>
            <td>Slider is showing: </td>
            <td>{ `${ state.sliderIsShowing }` }</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function Actions() {
  const dispatch = useAppDispatch()

  const ActionHeadline = ({ children }) => {
    return (
      <h3 style={{ marginTop: '1rem' }}>
        { children }
      </h3>
    )
  }

  return (
    <>
      <h2>App consumer actions:</h2>
      <div>
        <ActionHeadline>isPlaying</ActionHeadline>
        <button onClick={ () => dispatch({ type: 'TO_FALSE', target: 'isPlaying' }) }>Set playing to false</button>
        <button onClick={ () => dispatch({ type: 'TO_TRUE', target: 'isPlaying' }) }>Set playing to true</button>
        <button onClick={ () => dispatch({ type: 'TOGGLE', target: 'isPlaying' }) }>Toggle playing</button>

        <ActionHeadline>Close promo</ActionHeadline>
        <button onClick={ () => dispatch({ type: 'CLOSE_PROMO' }) }>Close promo</button>


        {/* <ActionHeadline>bannerIsShowing</ActionHeadline>
        <button onClick={ () => dispatch({ type: HIDE_BANNER }) }>Hide banner</button>
        <button onClick={ () => dispatch({ type: SHOW_BANNER }) }>Show banner</button>
        <button onClick={ () => dispatch({ type: TOGGLE_BANNER }) }>Toggle banner</button>


        <ActionHeadline>promoIsOpened</ActionHeadline>
        <button onClick={ () => dispatch({ type: HIDE_PROMO }) }>Hide promo</button>
        <button onClick={ () => dispatch({ type: SHOW_PROMO }) }>Show promo</button>
        <button onClick={ () => dispatch({ type: TOGGLE_PROMO }) }>Toggle promo</button>


        <ActionHeadline>dialogIsCompleted</ActionHeadline>
        <button onClick={ () => dispatch({ type: UNCOMPLETE_DIALOG }) }>Uncomplete dialog</button>
        <button onClick={ () => dispatch({ type: COMPLETE_DIALOG }) }>Complete dialog</button>
        <button onClick={ () => dispatch({ type: TOGGLE_DIALOG }) }>Toggle dialog</button>


        <ActionHeadline>sliderIsShowing</ActionHeadline>
        <button onClick={ () => dispatch({ type: HIDE_SLIDER }) }>Hide slider</button>
        <button onClick={ () => dispatch({ type: SHOW_SLIDER }) }>Show slider</button>
        <button onClick={ () => dispatch({ type: TOGGLE_SLIDER }) }>Toggle slider</button> */}
      </div>
      
    </>
    
  )
}