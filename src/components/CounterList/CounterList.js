import React from 'react'
import classes from './CounterList.module.scss'
import Counter from "./Counter/Counter"

export const CounterList = props => {
  return (
    <div
      className={classes.CounterList}
    >
      {
        props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            field={counter.field}
            label={counter.label}
            value={counter.value}
          />
        ))
      }
      {
        props.children
      }
    </div>
  )
}