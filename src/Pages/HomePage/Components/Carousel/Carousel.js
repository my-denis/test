import React from 'react'
import data from './DataCarousel.json'
import './Carousel.scss'
import { Slider } from './Slider';


const Carousel = () => {
  return (
    <div className='wrapper'>
        <Slider className='carousel' slides={data}/>
    </div>
  )
}

export default Carousel