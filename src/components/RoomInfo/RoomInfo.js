import React from 'react'
import classes from './RoomInfo.module.scss'

export const RoomInfo = props => {
  const cls = [classes.RoomInfo]
  if (props.isBooking) cls.push(classes.booking)
  return (
    <div className={cls.join(' ')}>
      <p className={classes.number}>
        №&nbsp;
        <span className={classes.value}>
          {props.number}
        </span>
        {
          props.category && <span className={classes.category}>
            {props.category}
        </span>
        }
      </p>
      <p className={classes.price}>
        {props.price}₽&nbsp;

        <span className={classes.perDay}>
          в сутки
        </span>
      </p>
    </div>
  )
}