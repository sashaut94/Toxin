import React from 'react'
import classes from './PaginationList.module.scss'
import {PaginationItem} from "./PaginationItem/PaginationItem"
import {connect} from "react-redux"
import {changePage} from "../../store/actions/actionCreator"

const PaginationList = props => {
  const roomsAmount = props.rooms.length
  const pagesAmount = Math.ceil(roomsAmount / props.roomsPerPage)
  const currentRoomsAmount = props.currentRooms.length
  const numbers = []
  for (let i = 1; i <= pagesAmount; i++) {
    if ((i === 2 && props.currentPage > 4) || (i === pagesAmount && props.currentPage <= pagesAmount - 4)) numbers.push('...')
    if ((props.currentPage - 2 <= i && i <= props.currentPage + 2) || i === 1 || i === pagesAmount) {
      numbers.push(i)
    }
  }
  return (
    <div>
      <ul className={classes.PaginationList}>
        {
          numbers.map((number, index) => {
              return (
                <PaginationItem
                  key={index}
                  number={number}
                  type={props.currentPage === number ? 'current' : null}
                  onClick={() => {
                    if (typeof number === 'number') {
                      props.changePage(props.rooms, props.roomsPerPage, number)
                      window.scrollTo({top: 0, behavior: 'smooth'})
                    }
                  }}
                  disabled={props.currentPage === number}
                />
              )
            }
          )
        }
        {
          pagesAmount > 1 && <li>
            <button
              className={classes.nextPage}
              onClick={() => {
                props.changePage(props.rooms, props.roomsPerPage, props.currentPage + 1, props.currentPage)
                window.scrollTo({top: 0, behavior: 'smooth'})
              }}
              type='button'
              disabled={pagesAmount === props.currentPage}
            >
            </button>
          </li>
        }
      </ul>
      <p className={classes.text}>
        {1 + props.roomsPerPage * (props.currentPage - 1)}-{currentRoomsAmount + props.roomsPerPage * (props.currentPage - 1)} из {roomsAmount > 100 ? '100+' : roomsAmount} вариантов
        аренды
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.search.currentPage,
    currentRooms: state.search.currentRooms,
    roomsPerPage: state.search.roomsPerPage,
    rooms: state.search.rooms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (rooms, roomsPerPage, newPageNumber, currentPage) => dispatch(changePage(rooms, roomsPerPage, newPageNumber, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationList)