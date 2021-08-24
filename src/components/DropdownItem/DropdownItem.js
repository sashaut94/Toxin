import React from 'react'
import classes from './DropdownItem.module.scss'
import {CSSTransition} from 'react-transition-group'

export const DropdownItem = props => {
  const cls = [classes.Dropdown]
  const nodeRef = React.createRef()
  if (props.block) cls.push(classes[props.block])
  return (
    <CSSTransition
      in={props.isOpen}
      timeout={500}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={cls.join(' ')}
        key={Date.now()}>
        {props.children}
      </div>
    </CSSTransition>
  )
}