import React from 'react'
import classes from './RangeSlider.module.scss'
import {connect} from "react-redux"
import 'rc-slider/assets/index.css'
import {Range} from 'rc-slider'
import {onPriceAfterChange, onPriceChange} from "../../store/actions/actionCreator";
import {Text} from '../Text/Text'

const RangeSlider = props => {
  return (
    <div
      className={classes.RangeSlider}
    >
      <p className={classes.label}>
        <Text type='h3'>
          Диапазон цены
        </Text>
      </p>

      <p className={classes.prices}>
        {props.filters.price.value[0]}₽ - {props.filters.price.value[1]}₽
      </p>

      <>
        <Range
          min={0}
          max={10000}
          step={10}
          value={props.filters.price.value}
          onChange={(e) => {
            props.onPriceChange(props.filters, e, props.rooms)
          }}
          onAfterChange={() => {
            props.onPriceAfterChange(props.filters, props.rooms, props.roomsPerPage, props.currentPage)
          }}
          className={classes.slider}
          railStyle={{
            background: '#FFFFFF',
            border: '1px solid rgba(31, 32, 65, 0.25)',
            height: '6px',
            borderRadius: '3px',
          }}
          handleStyle={[
            {
              background: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
              border: '2px solid #FFFFFF',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              marginTop: '-3px',
            },
            {
              background: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
              border: '2px solid #FFFFFF',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              marginTop: '-3px',
            }
          ]}
          trackStyle={[
            {
              background: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
              height: '6px',
            }
          ]}
        />
      </>
      <p className={classes.description}>
        Стоимость за сутки пребывания в номере
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filters: state.search.filters,
    rooms: state.search.rooms,
    roomsPerPage: state.search.roomsPerPage,
    currentPage: state.search.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPriceChange: (filters, e, rooms) => dispatch(onPriceChange(filters, e, rooms)),
    onPriceAfterChange: (filters, rooms, roomsPerPage, currentPage) => dispatch(onPriceAfterChange(filters, rooms, roomsPerPage, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)