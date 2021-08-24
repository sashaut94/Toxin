import React from 'react'
import classes from './RoomDescriptionItem.module.scss'
import {Text} from "../../Text/Text";

export const RoomDescriptionItem = props => {
  const cls = [classes.RoomDescriptionItem]
  cls.push(classes[props.id])
  return (
    <li className={cls.join(' ')}>
      <p className={classes.title}>
        <Text>
          {props.title}
        </Text>
      </p>

      <p className={classes.description}>
        <Text>
          {props.description}
        </Text>
      </p>
    </li>
  )
}