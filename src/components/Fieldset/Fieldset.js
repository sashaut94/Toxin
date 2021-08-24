import React from 'react'
import classes from './Fieldset.module.scss'
import {Text} from '../Text/Text'

export const Fieldset = props => {
  const cls = [classes.Fieldset]
  if (props.flex) cls.push(classes.flex)
  cls.push(classes[props.block])
  return (
    <fieldset className={cls.join(' ')}>
      {
        props.legend && <legend className={classes.legend}>
          <Text type='h3'>
            {props.legend}
          </Text>
        </legend>
      }
      {props.children}
    </fieldset>
  )
}