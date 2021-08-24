import React from 'react'
import classes from './Counter.module.scss'
import {Label} from '../../Label/Label'
import {connect} from 'react-redux'
import {changeCounter} from '../../../store/actions/actionCreator'

const Counter = props => {
  return (
    <div className={classes.Counter}>
      <p>
        <Label>
          {props.label}
        </Label>
      </p>

      <div className={classes.buttons}>
        <button
          className={classes.button}
          type='button'
          onClick={() => {
            props.changeCounter(props.filters, props.rooms, props.id, -1, props.roomsPerPage, props.currentPage)
          }}
          disabled={props.value === 0 || (props.loading)}
        >
          -
        </button>

        <p className={classes.count}>
          <Label>
            {props.value}
          </Label>
        </p>

        <button
          className={classes.button}
          type='button'
          onClick={() => {
            props.changeCounter(props.filters, props.rooms, props.id, 1, props.roomsPerPage, props.currentPage)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filters: state.search.filters,
    rooms: state.search.rooms,
    roomsPerPage: state.search.roomsPerPage,
    currentPage: state.search.currentPage,
    loading: state.search.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCounter: (filters, rooms, counterId, operand, roomsPerPage, currentPage) => dispatch(changeCounter(filters, rooms, counterId, operand, roomsPerPage, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)