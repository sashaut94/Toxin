import React from 'react'
import DatePicker from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import classes from './DataPicker.module.scss'
import {ItemTitle} from '../ItemTitle/ItemTitle'
import {getMonth, getYear} from 'date-fns'
import {connect} from 'react-redux'
import {
  clearDates, closeDataPicker,
  setArrivalDate,
  setDepartureDate,
} from '../../store/actions/actionCreator'
import {DropdownButtons} from '../DropdownButtons/DropdownButtons'
import {ArrowButton} from "../ArrowButton/ArrowButton";

const DataPicker = props => {
  const cls = [classes.DataPicker]

  if (props.block) cls.push(classes[props.block])

  const onChange = (dates) => {
    const [start, end] = dates;
    props.setStartDate(start);
    props.setEndDate(end);
  }

  return (
    <div className={cls.join(' ')}>
      <DatePicker
        selected={props.startDate}
        onChange={onChange}
        startDate={props.startDate}
        endDate={props.endDate}
        selectsRange
        inline
        locale={ru}
        minDate={new Date()}
        dateFormat='ДД.ММ.ГГГГ'
        renderCustomHeader={
          ({
             date,
             decreaseMonth,
             increaseMonth,
             prevMonthButtonDisabled,
             nextMonthButtonDisabled,
           }) =>
            (
              <div className={classes.header}>
                <ArrowButton
                  block='dataPicker'
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  isLeft
                  description='Предыдущий месяц'
                />

                <p>
                  <ItemTitle>
                    {props.months[getMonth(date)]}
                    &nbsp;
                    {getYear(date)}
                  </ItemTitle>
                </p>

                <ArrowButton
                  block='dataPicker'
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  description='Следующий месяц'
                />
              </div>
            )}
      >
        <DropdownButtons
          onClear={props.clearDates}
          onApply={() => {
            props.closeDataPicker(props.dropdowns)
          }}
          remove={props.startDate || props.endDate}
        />
      </DatePicker>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    startDate: state.search.startDate,
    endDate: state.search.endDate,
    months: state.search.months,
    dropdowns: state.search.dropdowns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setStartDate: (date) => dispatch(setArrivalDate(date)),
    setEndDate: (date) => dispatch(setDepartureDate(date)),
    closeDataPicker: () => dispatch(closeDataPicker()),
    clearDates: () => dispatch(clearDates())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPicker)