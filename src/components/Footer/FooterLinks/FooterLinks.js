import React from 'react'
import classes from './FooterLinks.module.scss'
import {Label} from '../../Label/Label'
import {NavList} from '../../NavList/NavList'

export const FooterLinks = props => {
  return (
    <div className={classes.FooterLinks}>
      <Label
        isFooter={true}
      >
        {props.title}
      </Label>

      <NavList
        links={props.links}
        block='footer'
      />
    </div>
  )
}