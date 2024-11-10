import React from 'react'
import "./Slider.scss"

import { register } from "swiper/element/bundle";
import nextIcon from '../../icons/nextBlue.png';
import prevIcon from '../../icons/prevBlue.png';
register();


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { Year } from '../types';

interface SliderProps {
  years: Year[];
}

const Slider = ({years}: SliderProps) => {
  return (
    <div className='SliderBlock' id='SliderBlock'>
    <Swiper
    id="Swiper"
      // navigation={true}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      modules={[Navigation]}
      // spaceBetween={300}
      slidesPerView={1.5}
      breakpoints={{
        
        800: {
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {years.map((slide, index) => <SwiperSlide key={index} className='slide'>
        <div className='SliderSlide'>
          <p className='SliderDates'>{slide.year}</p>
          <p>{slide.desc}</p>
        </div>
        
      </SwiperSlide>)}
    </Swiper>
    {/* <button  className="swiper-button-next"></button>
    <button className="swiper-button-prev"></button> */}
    <div className="swiper-button-prev">
      <div className='swiper-button-border'><img style={{marginRight:".2rem"}} src={prevIcon} alt="Next" /></div>
    </div>
    <div className="swiper-button-next">
      <div className='swiper-button-border'><img style={{marginLeft:".2rem"}} src={nextIcon} alt="Next" /></div>
    </div>
    </div>
  )
}

export default Slider


