import React from 'react'
import classes from './Container.module.scss'

export const Container = props => {
  const cls = [classes.Container]

  if (props.height) cls.push(classes[props.height])
  if (props.position) cls.push(classes[props.position])

  return (
    <div className={cls.join(' ')}>
      {props.children}
    </div>
  )
}