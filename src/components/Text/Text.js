import React from 'react'
import classes from './Text.module.scss'

export const Text = props => {
  const cls = [classes.Text]
  if (props.block) cls.push(classes[props.block])
  if (props.type) cls.push(classes[props.type])
  return (
    <span className={cls.join(' ')}>
      {props.children}
    </span>
  )
}


