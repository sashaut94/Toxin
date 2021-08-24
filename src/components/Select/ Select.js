import React from 'react'
import classes from './Select.module.scss'
import {connect} from 'react-redux'
import {Text} from '../Text/Text'

const Select = props => {
  return (
    <div className={classes.Select}>
      <h4 className={classes.label}>
        <Text type='h3'>
          {props.label}
        </Text>
      </h4>
      <select
        className={classes.select}
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(e, props.rooms, props.currentPage, props.roomsPerPage)}
      >
        {
          props.options.map(option => (
            <option
              key={option.id}
              value={option.id}
            >
              {option.text}
            </option>
          ))
        }
      </select>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    rooms: state.search.rooms,
    roomsPerPage: state.search.roomsPerPage,
    currentPage: state.search.currentPage
  }
}

export default connect(mapStateToProps)(Select)