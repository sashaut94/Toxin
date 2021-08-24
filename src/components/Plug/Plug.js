import React from 'react'
import classes from './Plug.module.scss'
import {SubTitle} from '../SubTitle/SubTitle'
import {Container} from '../Container/Container'

export const Plug = props => {
  return (
    <div className={classes.Plug}>
      <Container>
        <div className={classes.inner}>
          <h1 className={classes.title}>
            <SubTitle>
              {props.title}
            </SubTitle>
          </h1>
          <p className={classes.content}>
            Место для будущего контента
          </p>
        </div>
      </Container>
    </div>

  )
}