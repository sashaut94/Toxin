import React from 'react'
import classes from './NavItem.module.scss'
import {Link, NavLink} from "react-router-dom";

export const NavItem = props => {

  const cls = [classes.NavItem]
  if (props.dropdown) cls.push(classes.dropdown)
  if (props.isFooter) cls.push(classes.footer)

  return (

    <li className={cls.join(' ')}>

      {
        props.isNav
          ? <NavLink
            className={classes.link}
            to={props.path}
          >
            {props.text}
          </NavLink>

          : <Link
            className={classes.link}
            to={props.path}
          >
            {props.text}
          </Link>
      }

      {
        props.dropdown && <button className={classes.button}>
          <span className='visually-hidden'>Открыть пункт меню</span>
        </button>
      }

    </li>

  )
}