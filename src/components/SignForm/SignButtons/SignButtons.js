import React from 'react'
import classes from './SignButtons.module.scss'
import {Button} from '../../Button/Button'

export const SignButtons = props => {
  return (
    <div className={classes.SignButtons}>
      <Button
        type='withArrow'
        block='top'
      >
        {props.withArrow}
      </Button>

      <span className={classes.text}>
          {props.text}
      </span>

      <Button
        type='white'
        block='bottom'
        to={props.to}
        isLink
      >
        {props.white}
      </Button>
    </div>
  )
}