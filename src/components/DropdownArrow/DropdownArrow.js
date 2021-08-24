import React from 'react'
import classes from './DropdownArrow.module.scss'

export const DropdownArrow = props => {
  const cls = [classes.DropdownArrow]
  if (props.type) cls.push(classes[props.type])
  return <button className={cls.join(' ')}>
    <span className='visually-hidden'>Открыть меню</span>
  </button>
}