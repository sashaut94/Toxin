import React, {useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import classes from './DropdownWrapper.module.scss'
import {toggleDropdown} from '../../store/actions/actionCreator'

const DropdownWrapper = props => {
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (props.dropdowns[props.block] && ref.current && !ref.current.contains(e.target)) {
        props.toggleDropdown(props.dropdowns, props.block)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [])

  const cls = [classes.DropdownWrapper]
  if (props.block) cls.push(classes[props.block])
  if (props.flex) cls.push(classes.flex)

  return (
    <div
      className={cls.join(' ')}
      ref={ref}
    >{props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownWrapper)