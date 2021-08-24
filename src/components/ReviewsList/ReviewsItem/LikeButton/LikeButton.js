import React from 'react'
import classes from './LikeButton.module.scss'

export const LikeButton = props => {
  const cls = [classes.LikeButton]
  if (props.liked) cls.push(classes.liked)
  return (
    <button className={cls.join(' ')}>
      {props.children}
    </button>
  )
}