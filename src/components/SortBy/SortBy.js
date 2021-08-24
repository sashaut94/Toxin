import React from 'react'
import classes from './SortBy.module.scss'
import Select from '../Select/ Select'
import {connect} from 'react-redux'
import {sort} from '../../store/actions/actionCreator'

const options = [
  {
    id: 'byNumber',
    text: 'номеру'
  },
  {
    id: 'byPriceAscending',
    text: 'цене (по возрастанию)'
  },
  {
    id: 'byPriceDescending',
    text: 'цене (по убыванию)'
  },
  {
    id: 'byRating',
    text: 'рейтингу'
  },
  {
    id: 'byReviews',
    text: 'отзывам'
  }
]

const SortBy = props => {
  return (
    <div className={classes.SortBy}>
      <Select
        id='sortBy'
        value={props.sortBy}
        options={options}
        onChange={props.sort}
        label='Сортировать по'
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    sortBy: state.search.sortBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sort: (e, rooms, currentPage, roomsPerPage) => dispatch(sort(e, rooms, currentPage, roomsPerPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)