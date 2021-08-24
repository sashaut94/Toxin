import React from 'react'
import classes from './Plug.module.scss'
import {Container} from '../Container/Container'
import {Text} from '../Text/Text'

export const Plug = props => {
  return (
    <div className={classes.Plug}>
      <Container>
        <div className={classes.inner}>
          <h1 className={classes.title}>
            <Text type='h1'>
              {props.title}
            </Text>
          </h1>
          <p className={classes.content}>
            Место для будущего контента
          </p>
        </div>
      </Container>
    </div>

  )
}