import React from 'react'
import classes from './NavItem.module.scss'
import {NavLink} from 'react-router-dom'
import {DropdownArrow} from '../../DropdownArrow/DropdownArrow'

export const NavItem = props => {
  const cls = [classes.NavItem]
  if (props.dropdown) cls.push(classes.withDropdown)
  if (props.block) cls.push(classes[props.block])

  return (
    <li className={cls.join(' ')}>
      <NavLink
        className={classes.link}
        to={props.path}
        activeClassName={classes.active}
      >
        {props.text}
      </NavLink>

      {
        props.dropdown && <DropdownArrow type='navLink'/>
      }
    </li>
  )
}