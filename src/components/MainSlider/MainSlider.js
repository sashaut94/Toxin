import React from 'react'
import classes from './MainSlider.module.scss'
import {SimpleSlider} from '../Slider/Slider'

const slides = [
  {imgName: 'slide1'},
  {imgName: 'slide2'},
  {imgName: 'slide3'},
]

export const MainSlider = props => {
  const imageCls = [classes.image]
  if (props.block) imageCls.push(classes[props.block])

  return (
    <SimpleSlider
      settings={{
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000
      }}
    >
      {
        slides.map(slide => (
          <img
            key={slide.imgName}
            className={imageCls.join(' ')}
            src={`${process.env.PUBLIC_URL}/images/${slide.imgName}.jpg`}
            alt={slide.imgName}
          />
        ))
      }
    </SimpleSlider>
  )
}