import React from 'react'
import classes from './RulesItem.module.scss'
import {Text} from "../../Text/Text";

export const RulesItem = props => {
  const cls = [classes.RulesItem]
  if (props.withMarker) cls.push(classes.withMarker)
  return (
    <li className={cls.join(' ')}>
      <Text>
        {props.text}
      </Text>
    </li>
  )
}