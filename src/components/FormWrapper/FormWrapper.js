import React from 'react'
import classes from './FormWrapper.module.scss'
import {Text} from '../Text/Text'

export const FormWrapper = props => {
  const cls = [classes.FormWrapper]
  cls.push(classes[props.block])
  return (
    <div className={cls.join(' ')}>
      {
        props.title && <h3 className={classes.title}>
          <Text type='h1'>
            {props.title}
          </Text>
        </h3>
      }
      {props.children}
    </div>
  )
}
