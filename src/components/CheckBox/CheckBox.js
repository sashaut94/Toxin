import React from 'react'
import classes from './CheckBox.module.scss'
import {connect} from "react-redux"
import {
  onToggleCheckboxFilter,
  toggleAdditionalServices
} from '../../store/actions/actionCreator'

const CheckBox = props => {
  const htmlFor = props.id
  const cls = [classes.CheckBox]
  if (props.type) cls.push(classes[props.type])
  return (
    <div className={cls.join(' ')}>
      <input
        className={`${classes.input} visually-hidden`}
        type="checkbox"
        id={htmlFor}
        checked={props.checked}
        disabled={props.loading && props.checked}
        onChange={() => {
          if (props.field === 'additional') {
            props.toggleAdditionalServices(props.additionalServices, props.id)
          } else {
            props.onToggleCheckboxFilter(props.filters, props.id, props.rooms, props.roomsPerPage, props.currentPage)
          }
        }}
      />
      <label
        className={classes.label}
        htmlFor={htmlFor}
      >
        {props.label}
      </label>

      <p className={classes.description}>
        {props.description}
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    rooms: state.search.rooms,
    currentPage: state.search.currentPage,
    roomsPerPage: state.search.roomsPerPage,
    filters: state.search.filters,
    additionalServices: state.search.additionalServices,
    loading: state.search.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAdditionalServices: (currentState, id) => dispatch(toggleAdditionalServices(currentState, id)),
    onToggleCheckboxFilter: (filters, id, rooms, roomsPerPage, currentPage) => dispatch(onToggleCheckboxFilter(filters, id, rooms, roomsPerPage, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox)