import React from 'react'
import classes from './Toggle.module.scss'
import {Text} from "../Text/Text"

export const Toggle = props => {
  const htmlFor = `${props.block}-${props.id}`
  return (
    <div className={classes.Toggle}>
      <input
        id={htmlFor}
        type="checkbox"
        className={`${classes.input} visually-hidden`}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        className={classes.label}
        htmlFor={htmlFor}
      >
        <Text>
          {props.label}
        </Text>
      </label>
    </div>
  )
}