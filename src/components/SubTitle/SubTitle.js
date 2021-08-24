import React from 'react'
import classes from './SubTitle.module.scss'

export const SubTitle = props => (
  <span className={classes.SubTitle}>
    {props.children}
  </span>
)