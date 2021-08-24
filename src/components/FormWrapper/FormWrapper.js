import React from 'react'
import classes from './FormWrapper.module.scss'
import {SubTitle} from "../SubTitle/SubTitle"

export const FormWrapper = props => {
  const cls = [classes.FormWrapper]
  cls.push(classes[props.block])
  return (
    <div className={cls.join(' ')}>
      {
        props.title && <h3 className={classes.title}>
          <SubTitle>
            {props.title}
          </SubTitle>
        </h3>
      }
      {props.children}
    </div>
  )
}
