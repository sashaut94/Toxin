import React from 'react'
import classes from './Fieldset.module.scss'
import {Label} from "../Label/Label"

export const Fieldset = props => {
  const cls = [classes.Fieldset]
  if (props.flex) cls.push(classes.flex)
  cls.push(classes[props.block])
  return (
    <fieldset className={cls.join(' ')}>
      {
        props.legend && <legend className={classes.legend}>
          <Label>
            {props.legend}
          </Label>
        </legend>
      }
      {props.children}
    </fieldset>
  )
}