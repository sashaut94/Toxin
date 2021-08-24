import React from 'react'
import classes from './RoomsList.module.scss'
import RoomPreview from '../RoomPreview/RoomPreview'
import {connect} from 'react-redux'
import PaginationList from '../PaginationList/PaginationList'
import {Loader} from '../Loader/Loader'

const RoomsList = props => {
  return (
    props.currentRooms.length && !props.loading
      ? <>
        <div className={classes.RoomsList}>
          {
            props.currentRooms.map(room => (
              <RoomPreview
                key={room.id}
                id={room.id}
                number={room.number}
                category={room.category}
                price={room.price}
                rate={room.rate}
                reviewsAmount={room.reviews.length}
                slides={room.images}
                arrows={room.hover}
              />
            ))
          }
        </div>
        <PaginationList/>
      </>
      : <div className={classes.Loader}>
        <Loader/>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.search.loading,
    currentRooms: state.search.currentRooms
  }
}

export default connect(mapStateToProps)(RoomsList)
