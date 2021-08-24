import React from 'react'
import classes from './DropdownToggle.module.scss'
import {connect} from 'react-redux'
import {toggleDropdown} from '../../store/actions/actionCreator'
import {CSSTransition} from 'react-transition-group'
import {Text} from '../Text/Text'

const DropdownToggle = props => {
  const nodeRef = React.useRef(null)
  const arrow = (
    <CSSTransition
      in={props.open}
      timeout={500}
      classNames='arrow'
      key={props.dropdownId}
      nodeRef={nodeRef}
    >
      <span
        className={classes.arrow}
        ref={nodeRef}
      />
    </CSSTransition>
  )

  const cls = []
  if (props.withBorder) cls.push(classes.withBorder)
  if (props.open) cls.push(classes.open)
  if (props.dropdownId) cls.push(classes[props.dropdownId])
  if (props.type) cls.push(classes[props.type])

  return (
    <div className={cls.join(' ')}>
      <p
        className={classes.label}
        onClick={!props.withBorder
          ? () => props.toggleDropdown(props.dropdowns, props.dropdownId)
          : null
        }
      >
        <Text type='h2'>
          {props.label}
        </Text>

        {
          !props.withBorder && arrow
        }
      </p>

      {
        props.withBorder && <div
          className={classes.input}
          onClick={() => {
            props.toggleDropdown(props.dropdowns, props.dropdownId)
          }}
        >
          {props.value || props.placeholder}
          {arrow}
        </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    dropdowns: state.search.dropdowns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDropdown: (dropdownsState, dropdown) => dispatch(toggleDropdown(dropdownsState, dropdown))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownToggle)