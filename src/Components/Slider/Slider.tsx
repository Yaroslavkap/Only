import React from 'react'
import "./Slider.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
  const data = [
    {
        year: 2016,
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
        year: 2016,
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
        year: 2016,
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    },
    {
        year: 2016,
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ]
  return (
    <div className='SliderBlock'>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={100}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {data.map(slide => <SwiperSlide className='slide'>
        <h1>{slide.year}</h1>
        <p>{slide.desc}</p>
      </SwiperSlide>)}
    </Swiper>
    </div>
  )
}

export default Slider