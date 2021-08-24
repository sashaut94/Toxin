import React from 'react'
import classes from './Label.module.scss'

export const Label = props => {

  const cls = [classes.Label]
  if (props.isFooter) cls.push(classes.footer)

  return (

    <span className={cls.join(' ')}>
    {props.children}
  </span>
  )
}