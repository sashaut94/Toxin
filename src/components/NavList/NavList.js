import React from 'react'
import classes from './NavList.module.scss'
import {NavItem} from "./NavItem/NavItem"

export const NavList = props => {
  const cls = [classes.NavList]
  if (props.block) cls.push(classes[props.block])

  return (
    <ul className={cls.join(' ')}>
      {
        props.links.map(link => (
          <NavItem
            key={link.id}
            text={link.text}
            block={props.block}
            path={link.pathTo}
            dropdown={link.dropdown}
          />
        ))
      }
    </ul>
  )
}