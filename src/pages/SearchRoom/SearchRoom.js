import React, {useEffect} from 'react'
import classes from './SearchRoom.module.scss'
import {Container} from '../../components/Container/Container'
import RoomsList from '../../components/RoomsList/RoomsList'
import Guests from '../../components/Guests/Guests'
import {connect} from 'react-redux'
import RangeSlider from '../../components/RangeSlider/RangeSlider'
import AvailableFieldset from '../../components/AvailableFieldset/AvailableFieldset'
import ComfortableFieldset from '../../components/ComfortableFieldset/ComfortableFieldset'
import RulesFieldset from '../../components/RulesFieldset/RulesFieldset'
import AdditionalFieldset from '../../components/AdditionalFieldset/AdditionalFieldset'
import DropdownDataPicker from '../../components/DropdownDatapicker/DropdownDatapicker'
import {fetchRoomsByGuests} from '../../store/actions/actionCreator'
import SortBy from '../../components/SortBy/SortBy'
import RoomsPerPage from '../../components/RoomsPerPage/RoomsPerPage'
import {Text} from "../../components/Text/Text";

const SearchRoom = props => {
  useEffect(() => {
    props.fetchRoomsByGuests(props.filters, props.roomsPerPage, props.currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <section className={classes.SearchForm}>
        <form className={classes.filter}>
          <DropdownDataPicker
            amount={1}
            dropdownId='dataPicker'
            block='searchRoom'
          />

          <Guests
            dropdownId='guests'
          />

          <RangeSlider/>

          <RulesFieldset/>

          <AvailableFieldset/>

          <ComfortableFieldset/>

          <AdditionalFieldset/>
        </form>

        <div className={classes.rooms}>
          <h1 className={classes.title}>
            <Text type='h1'>
              Номера, которые мы для вас подобрали
            </Text>

            <div className={classes.controls}>
              <SortBy/>
              <RoomsPerPage/>
            </div>
          </h1>

          <RoomsList/>
        </div>
      </section>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    rooms: state.search.rooms,
    filters: state.search.filters,
    roomsPerPage: state.search.roomsPerPage,
    currentPage: state.search.currentPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRoomsByGuests: (filters, roomsPerPage, currentPage) => dispatch(fetchRoomsByGuests(filters, roomsPerPage, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoom)