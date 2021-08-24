import React from 'react'
import Select from '../Select/ Select'
import {connect} from 'react-redux'
import {outputBy} from '../../store/actions/actionCreator'

const roomsPerPages = [
  {
    id: 6,
    text: '6 комнат'
  },
  {
    id: 9,
    text: '9 комнат'
  },
  {
    id: 12,
    text: '12 комнат'
  },
  {
    id: 15,
    text: '15 комнат'
  },
  {
    id: 18,
    text: '18 комнат'
  }
]

const RoomsPerPage = props => {
  return (
    <Select
      id='roomsPerPage'
      value={props.roomsPerPage}
      options={roomsPerPages}
      onChange={props.outputBy}
      label='Выводить по'
    />
  )
}

function mapStateToProps(state) {
  return {
    roomsPerPage: state.search.roomsPerPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    outputBy: (e, rooms, currentPage) => dispatch(outputBy(e, rooms, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsPerPage)