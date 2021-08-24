import React from 'react'
import classes from './Logo.module.scss'
import {NavLink} from 'react-router-dom'

export const Logo = props => {
  const cls = [classes.Logo]
  if (props.block) cls.push(classes[props.block])

  return (
    <p className={classes.wrapper}>
      <NavLink
        to='/'
        exact
        className={cls.join(' ')}
        activeClassName={classes.active}
      >
      <span className='visually-hidden'>
        На главную
      </span>
      </NavLink>
    </p>
  )
}