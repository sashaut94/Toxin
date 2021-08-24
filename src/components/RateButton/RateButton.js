import React from 'react'
import classes from './RateButton.module.scss'
import {Star} from "./Star/Star";

export const RateButton = props => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(<Star
      key={i}
      fill={i < props.rate}
    />)
  }

  return (
    <div className={classes.RateButton}>
      {
        stars
      }
    </div>
  )
}