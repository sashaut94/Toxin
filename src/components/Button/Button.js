import React from 'react'
import classes from './Button.module.scss'
import {Link} from 'react-router-dom'

export const Button = props => {
  const cls = [classes.Button]
  if (props.type) cls.push(classes[props.type])
  if (props.isLink) cls.push(classes.link)
  cls.push(classes[props.block])

  return (
    props.isLink ? <Link
        className={cls.join(' ')}
        to={props.to}
      >
        {props.children}
      </Link>
      : <button
        className={cls.join(' ')}
        onClick={props.onClick}
        type='button'
      >
        {props.children}
      </button>
  )
}
