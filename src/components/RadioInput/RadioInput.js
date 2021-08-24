import React from 'react'
import classes from './RadioInput.module.scss'
import {Text} from "../Text/Text";

export const RadioInput = props => {
  const htmlFor = `${props.name}-${props.id}`
  return (
    <div className={classes.RadioInput}>
      <input
        className={`${classes.input} visually-hidden`}
        type="radio"
        id={htmlFor}
        name={props.name}
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