import React, { useState } from 'react'
import './DatesBlock.scss'
import Slider from '../Slider/Slider'



import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'
import Wheel from '../Wheel/Wheel';
import Dates from '../DatesPeriod/Dates';

const DatesBlock = () => {

  const period = useSelector((state: RootState) => state.period.period);
  const dates = useSelector((state: RootState) => state.dates);
  // const dispatch = useDispatch();


  return (
    <div className='DatesBlockContainer'>
        <div className='DatesBlock'>

            <div className='DatesLabel'>
                <h1>Исторические даты</h1>
            </div>

            <div className='WheelLabel' id='wheelLabel'>
                <h1>{dates[period].label}</h1>
            </div>

            <Wheel/>

            {/* <div className='Dates'>
                <p className='DatesStart'>{dates[period].start}</p>
                <p className='DatesEnd'>{dates[period].end}</p>
            </div> */}

            <Dates/>

            <Slider years ={dates[period].years}/>

        </div>
    </div>
  )
}

export default DatesBlock