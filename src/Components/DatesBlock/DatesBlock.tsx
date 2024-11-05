import React from 'react'
import './DatesBlock.scss'
import Slider from '../Slider/Slider'

const DatesBlock = () => {
  return (
    <div className='DatesBlockContainer'>
        <div className='DatesBlock'>

            <div className='DatesLabel'>
                <h1>Исторические даты</h1>
            </div>

            <div className='DatesWheel'></div>

            <div className='Dates'>
                <p className='DatesStart'>2015</p>
                <p className='DatesEnd'>2020</p>
            </div>

            <Slider/>

        </div>
    </div>
  )
}

export default DatesBlock