import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'
import { nextPeriod, prevPeriod, setLength, setPeriod } from '../../store/period';
import "./Wheel.scss";
import nextIcon from '../../icons/next.png';
import prevIcon from '../../icons/prev.png';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';



const Wheel = () => {


  const period = useSelector((state: RootState) => state.period.period);
  const dates = useSelector((state: RootState) => state.dates);
  const dispatch = useDispatch();

  const wheelRef = useRef(null);

  let len = dates.length
  React.useEffect(() => {
    dispatch(setLength(len));
  }, [len, dispatch]);

  useEffect(() => {
    gsap.set(wheelRef.current, { rotation: 0 });
  }, []);

  const handleNext = () => {
    gsap.to(wheelRef.current, {
      duration: 1,
      rotation: `-=${360/dates.length}`,
      ease: 'power2.out',
    });
    dispatch(nextPeriod());

    gsap.to(['#wheelLabel', '#SliderBlock'], { 
      duration: 0.01, 
      opacity: 0, 
      ease: 'power2.out' 
    });

    gsap.to(['#wheelLabel', '#SliderBlock'], { 
      duration: 0.5, 
      opacity: 1, 
      ease: 'power2.out', 
      delay: 1 
    });

    const swiperInstance = document.getElementById('Swiper')?.swiper;

    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  const handlePrev = () => {
    gsap.to(wheelRef.current, {
      duration: 1,
      rotation: `+=${360/dates.length}`,
      ease: 'power2.out',
    });
    dispatch(prevPeriod());
  };

  gsap.to(['#wheelLabel', '#SliderBlock'], { 
    duration: 0.01, 
    opacity: 0, 
    ease: 'power2.out' 
  });

  gsap.to(['#wheelLabel', '#SliderBlock'], { 
    duration: 0.5, 
    opacity: 1, 
    ease: 'power2.out', 
    delay: 1 
  });
  const swiperInstance = document.getElementById('Swiper')?.swiper;

    if (swiperInstance) {
      swiperInstance.slideTo(0); // Сбрасываем на первый слайд
    }

  const handleDot = (index: number) => {
    dispatch(setPeriod(index))
    gsap.to(wheelRef.current, {
      duration: 1,
      rotation: `-${360/dates.length * index}`,
      ease: 'power2.out',
    })

    gsap.to(['#wheelLabel', '#SliderBlock'], { 
      duration: 0.01, 
      opacity: 0, 
      ease: 'power2.out' 
    });

    gsap.to(['#wheelLabel', '#SliderBlock'], { 
      duration: 0.5, 
      opacity: 1, 
      ease: 'power2.out', 
      delay: 1 
    });
    const swiperInstance = document.getElementById('Swiper')?.swiper;

    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }

  }

  

  return (

    <div>
      <div ref={wheelRef} className='DatesWheel' >
        
        {dates.map((dot, index) => 
        <div onClick={() => handleDot(index)} className={index === period ? 'dot' : 'dot dotZero'} key={index}  style={{ transform: `rotate(${(360 / dates.length) * index + 210}deg) translate(-50%, -50%)` }}>
          <div className={index === period ? 'dotContent' : 'dotContentZero'}>{index + 1}</div>
        </div>
        )}
      </div>

      <div className='WheelSwitch'>
        <div style={{marginBottom:"1rem"}}>
          <p>0{period + 1}/0{dates.length}</p>
        </div>
        
          <div className='WheelBtns'>
            <button className='wheelBtn' type='button' onClick={() => handlePrev()}>
              <img style={{marginRight:".2rem"}} src={prevIcon} alt="Next" />
            </button>
            <button className='wheelBtn'  type='button' onClick={() => handleNext()}>
              <img style={{marginLeft:".2rem"}} src={nextIcon} alt="Next" />
            </button>
          </div>
          
        
        
      </div>
  </div>
  )
}

export default Wheel