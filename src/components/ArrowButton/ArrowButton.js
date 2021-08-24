import React from 'react'
import classes from './ArrowButton.module.scss'

export const ArrowButton = props => {
  const cls = [classes.ArrowButton]

  if (props.block) cls.push(classes[props.block])
  if (props.isLeft) cls.push(classes.left)

  return (
    <button
      className={cls.join(' ')}
      type='button'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <svg className={classes.image} width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 .427l8.016 8.015L9 16.458l-1.406-1.406 5.578-5.625H.984V7.458h12.188L7.594 1.833 9 .427z"
              fill="currentColor"/>
      </svg>

      <span className='visually-hidden'>
        {props.description}
      </span>
    </button>
  )
}