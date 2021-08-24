import React from 'react'
import classes from './ItemTitle.module.scss'

export const ItemTitle = props => (
  <span className={classes.ItemTitle}>
    {props.children}
  </span>
)