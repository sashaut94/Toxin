import React from 'react'
import classes from './PaginationItem.module.scss'

export const PaginationItem = props => {
  const cls = [classes.PaginationItem]
  if (props.type) cls.push(classes[props.type])
  if (typeof props.number === 'number') {
    cls.push(classes.number)
  } else {
    cls.push(classes.ellipsis)
  }
  return (
    <li>
      <button
        className={cls.join(' ')}
        onClick={props.onClick}
        type='button'
        disabled={props.disabled}
      >
        {props.number}
      </button>
    </li>
  )
}