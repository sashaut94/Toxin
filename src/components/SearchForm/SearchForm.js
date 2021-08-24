import React from 'react'
import {Button} from '../Button/Button'
import {connect} from 'react-redux'
import {ChooseDates} from '../ChooseDates/ChooseDates'
import {FormWrapper} from '../FormWrapper/FormWrapper'

const SearchForm = () => {
  return (
    <FormWrapper title='Найдём номера под ваши пожелания'>
      <ChooseDates
        withGuests={true}
      />

      <Button
        type='withArrow'
        to='/rooms'
        isLink={true}
      >
        Подобрать номер
      </Button>
    </FormWrapper>
  )
}

function mapStateToProps(state) {
  return {
    arrivalDate: state.search.arrivalDate,
    departureDate: state.search.departureDate,
    guestsCount: state.search.guestsCount,
    isDataPicker: state.search.isDataPicker,
    guests: state.search.guests
  }
}

export default connect(mapStateToProps)(SearchForm)