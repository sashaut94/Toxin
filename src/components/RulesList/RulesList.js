import React from 'react'
import classes from './RulesList.module.scss'
import {RulesItem} from "./RulesItem/RulesItem"

export const RulesList = props => {
  const cls = [classes.RulesList]
  if (props.withMarker) cls.push(classes['withMarker'])
  return (
    <div className={cls.join(' ')}>
      <h3 className={classes.title}>
        {props.title}
      </h3>

      <ul className={classes.list}>
        {
          props.rules.map(rule => (
            <RulesItem
              key={rule.id}
              text={rule.text}
              withMarker={props.withMarker}
            />
          ))
        }
      </ul>
    </div>
  )
}