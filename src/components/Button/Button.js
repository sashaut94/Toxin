import React from 'react'
import classes from './Button.module.scss'
import {NavLink} from 'react-router-dom'
import {ArrowButton} from "../ArrowButton/ArrowButton";

export const Button = props => {
  const cls = [classes.Button]
  if (props.type) cls.push(classes[props.type])
  if (props.block) cls.push(classes[props.block])

  return (
    props.isLink ? <NavLink
        className={cls.join(' ')}
        to={props.to}
      >
        {props.children}

        {
          props.type === 'withArrow' && <ArrowButton block='button'/>
        }
      </NavLink>
      : <button
        className={cls.join(' ')}
        onClick={props.onClick}
        type='button'
      >
        {props.children}

        {
          props.type === 'withArrow' && <ArrowButton block='button'/>
        }
      </button>
  )
}
