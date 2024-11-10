import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { gsap } from 'gsap';


const Dates = () => {

    const period = useSelector((state: RootState) => state.period.period)
    const dates = useSelector((state: RootState) => state.dates)

    const prevPeriodRef = useRef<number | null>(null);
    

    

    useEffect(() => {
        const start= document.querySelectorAll('.DatesStart')
        const end = document.querySelectorAll('.DatesEnd')

        // let startDate = dates[period].start
        // let endDate = dates[period].start
        const prevPeriod = prevPeriodRef.current
        const startDate = prevPeriod !== null ? dates[prevPeriod].start : dates[period].start;
        const endDate = prevPeriod !== null ? dates[prevPeriod].end : dates[period].end;

        prevPeriodRef.current = period;
        gsap.from(start, {
          textContent: startDate,
          duration: 1,
          snap: {
            textContent: 1,
          },
          ease: 'power4.out',
        });

        gsap.from(end, {
            textContent: endDate,
            duration: 2,
            snap: {
              textContent: 1,
            },
            ease: 'power4.out',
          });
      }, [period]);


  
  return (
    <div className='Dates'>
        <p className='DatesStart'>{dates[period].start}</p>
        <p className='DatesEnd'>{dates[period].end}</p>
    </div>
  )
}

export default Dates