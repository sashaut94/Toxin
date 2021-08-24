import React from 'react'
import DropdownToggle from '../DropdownToggle/DropdownToggle'
import DataPicker from '../DataPicker/DataPicker'
import {connect} from 'react-redux'
import {closeDataPicker} from '../../store/actions/actionCreator'
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper'
import {DropdownItem} from '../DropdownItem/DropdownItem'

const getValue = (date) => date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
]
const DropdownDataPicker = props => {
  let startDay, startMonth, endDay, endMonth, start, end

  if (props.startDate !== null) {
    startDay = props.startDate.getDate()
    startMonth = months[props.startDate.getMonth()].slice(0, 3)
    start = `${startDay} ${startMonth} -`.toLowerCase()
  }

  if (props.endDate !== null) {
    endDay = props.endDate.getDate()
    endMonth = months[props.endDate.getMonth()].slice(0, 3)
    end = ` ${endDay} ${endMonth}`.toLowerCase()
  }

  return (
    <DropdownWrapper block='dataPicker' flex={props.amount === 2}>
      {
        props.amount === 1 && <DropdownToggle
          label='Даты пребывания в отеле'
          withBorder
          placeholder='Выберите даты'
          value={`${start || ''}${end || ''}`}
          dropdownId={props.dropdownId}
          open={props.dropdowns.dataPicker}
        />
      }

      {
        props.amount === 2 && <>
          <DropdownToggle
            label='Прибытие'
            withBorder
            value={props.startDate && getValue(props.startDate)}
            placeholder='ДД.ММ.ГГГГ'
            dropdownId={props.dropdownId}
            open={props.dropdowns.dataPicker}
            type='twoFields'
          />

          <DropdownToggle
            label='Выезд'
            withBorder={true}
            value={props.endDate && getValue(props.endDate)}
            placeholder='ДД.ММ.ГГГГ'
            dropdownId={props.dropdownId}
            open={props.dropdowns.dataPicker}
            type='twoFields'/>
        </>
      }

      <DropdownItem
        block='dataPicker'
        isOpen={props.dropdowns.dataPicker}
      >
        <DataPicker
          block={props.block}
          months={months}
        />
      </DropdownItem>
    </DropdownWrapper>
  )
}

function mapStateToProps(state) {
  return {
    startDate: state.search.startDate,
    endDate: state.search.endDate,
    dropdowns: state.search.dropdowns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeDataPicker: () => dispatch(closeDataPicker())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownDataPicker)