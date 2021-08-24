import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const SimpleSlider = props => {

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    ...props.settings
  }

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}