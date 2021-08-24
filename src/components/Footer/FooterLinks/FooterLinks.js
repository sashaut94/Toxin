import React from 'react'
import classes from './FooterLinks.module.scss'
import {NavList} from '../../NavList/NavList'
import {Text} from '../../Text/Text'

export const FooterLinks = props => {
  return (
    <div className={classes.FooterLinks}>
      <p className={classes.title}>
        <Text type='h3'>
          {props.title}
        </Text>
      </p>

      <NavList
        links={props.links}
        block='footer'
      />
    </div>
  )
}