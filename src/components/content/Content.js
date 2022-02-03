import { Banner, Promo } from '..'
import { useApp } from '../../contexts/AppContext'
import ReactPlayer from 'react-player/lazy'

export default function Content() {
  const [state, dispatch] = useApp()

  const { isPlaying, promoIsOpened } = state

  const showBanner = () => {
    setTimeout(() => {
      dispatch({
        type: 'TO_TRUE',
        target: 'bannerIsShowing'
      })
    }, 5000)
  }

  return (
    <>
      <ReactPlayer
        width={ 1280 }
        height={ 720 }
        url='https://www.youtube.com/watch?v=M7FIvfx5J10'
        controls={ true }
        muted={ true }
        playing={ isPlaying }
        onPlay={ showBanner }
      />
      <Banner />
      { promoIsOpened && <Promo /> }
    </>
  )
}