import React from 'react'
import classes from './Counter.module.scss'
import {connect} from 'react-redux'
import {changeCounter} from '../../../store/actions/actionCreator'
import {Text} from '../../Text/Text'

const Counter = props => {
  return (
    <div className={classes.Counter}>
      <p>
        <Text type='h3'>
          {props.label}
        </Text>
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
          <Text type='h3'>
            {props.value}
          </Text>
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