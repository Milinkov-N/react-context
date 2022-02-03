import { Swiper, SwiperSlide } from 'swiper/react'
import './slider.css'

import SwiperCore, {
  Keyboard, Pagination, Navigation
} from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Keyboard,Pagination,Navigation])

export default function Slider() {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={ 1 }
        spaceBetween={ 0 }
        keyboard={{
          "enabled": true
        }}
        navigation={ true }
      >
        <SwiperSlide>
          <img src='./slide-1.jpg' alt='slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./slide-2.jpg' alt='slide 2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./slide-3.jpg' alt='slide 3' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}