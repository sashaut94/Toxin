import {
  CLEAR_DATES,
  SET_ARRIVAL_DATE,
  SET_DEPARTURE_DATE,
  SET_PAGE,
  FETCH_START,
  FETCH_ERROR,
  SET_FILTERS,
  SET_ADDITIONAL_SERVICES,
  SET_CURRENT_ROOMS,
  SET_DROPDOWNS,
  SET_ROOMS,
  FETCH_SUCCESS,
  SET_SORT_BY,
  SET_ROOMS_PER_PAGE,
  SET_CURRENT_ROOM
} from "./actionsType"
import axios from "axios"

export function changeCounter(filters, rooms, counterId, operand, roomsPerPage, currentPage) {
  return dispatch => {
    const newFiltersState = {...filters}
    const newCounter = {...newFiltersState[counterId]}
    newCounter.value += operand
    if (counterId === 'adults' || counterId === 'children' || counterId === 'babies') {
      const newTotalGuests = {...newFiltersState['maxGuests']}
      newTotalGuests.value += operand
      newTotalGuests.checked = newTotalGuests.value !== 0
      if (operand === 1) newTotalGuests.changed = false
      newFiltersState['maxGuests'] = newTotalGuests
    } else {
      newCounter.checked = newCounter.value !== 0
      if (operand === 1) newCounter.changed = false
    }
    newFiltersState[counterId] = newCounter
    dispatch(setFilters(newFiltersState))
    if (operand === 1) {
      const filteredRooms = dispatch(filterRooms(rooms, newFiltersState))
      dispatch(setRooms(filteredRooms))
      dispatch(changePage(filteredRooms, roomsPerPage, 1, currentPage))
    } else {
      const resetFilters = dispatch(resetFiltersChanged(newFiltersState))
      dispatch(fetchRoomsByGuests(resetFilters, roomsPerPage, currentPage))
    }
  }
}

export function setFilters(newFilterState) {
  return {
    type: SET_FILTERS,
    payload: newFilterState
  }
}

export function setPage(value) {
  return {
    type: SET_PAGE,
    payload: value
  }
}

export function fetchSuccess() {
  return {
    type: FETCH_SUCCESS
  }
}

export function changePage(rooms, roomsPerPage, newPageNumber, currentPage) {
  return dispatch => {
    if (currentPage !== newPageNumber) {
      dispatch(setPage(newPageNumber))
    }
    dispatch(sliceCurrentRooms(rooms, roomsPerPage, newPageNumber))
  }
}

export function setDropdownsState(newDropdownsState) {
  return {
    type: SET_DROPDOWNS,
    payload: newDropdownsState
  }
}

export function setAdditionalServices(newAdditionalServicesState) {
  return {
    type: SET_ADDITIONAL_SERVICES,
    payload: newAdditionalServicesState
  }
}

export function toggleAdditionalServices(currentState, id) {
  return dispatch => {
    const newState = [...currentState]
    const currentService = newState.filter(item => item.id === id)[0]
    console.log(currentService)
    const index = newState.indexOf(currentService)
    const newService = newState[index]
    newService.checked = !newService.checked
    newState[index] = newService
    dispatch(setAdditionalServices(newState))
  }
}

export function closeDropdown(currentState, dropdown) {
  return dispatch => {
    const newState = {...currentState}
    newState[dropdown] = false
    dispatch(setDropdownsState(newState))
  }
}

export function toggleDropdown(dropdownsState, dropdownId) {
  return dispatch => {
    const newDropdownsState = {...dropdownsState}
    newDropdownsState[dropdownId] = !newDropdownsState[dropdownId]
    dispatch(setDropdownsState(newDropdownsState))
  }
}

export function onPriceChange(filters, e, rooms) {
  return dispatch => {
    const roomsPrices = rooms.map(room => room.price)
    const roomsMin = Math.min(...roomsPrices)
    const roomsMax = Math.max(...roomsPrices)
    const currentMin = filters.price.value[0]
    const currentMax = filters.price.value[1]
    const newFilters = {...filters}
    const newPrice = newFilters['price']
    newPrice.checked = roomsMin !== e[0] || roomsMax !== e[1]
    newPrice.changed = false
    newPrice.value = [...e]
    newPrice.isRequest = currentMin > e[0] || currentMax < e[1]
    newFilters['price'] = newPrice
    dispatch(setFilters(newFilters))
  }
}

export function onPriceAfterChange(filters, rooms, roomsPerPage, currentPage) {
  return dispatch => {
    if (filters.price.isRequest) {
      const resetFilters = dispatch(resetFiltersChanged(filters))
      dispatch(fetchRoomsByGuests(resetFilters, roomsPerPage, currentPage))
    } else {
      const filteredRooms = dispatch(filterRooms(rooms, filters))
      dispatch(setRooms(filteredRooms))
      dispatch(changePage(filteredRooms, roomsPerPage, 1, currentPage))
    }
  }
}

export function fetchStart() {
  return {
    type: FETCH_START
  }
}

export function fetchError(e) {
  return {
    type: FETCH_ERROR,
    payload: e
  }
}

export function filterRooms(rooms, filters) {
  return dispatch => {
    let filteredRooms = [...rooms]
    const checkedFilters = Object.values(filters).filter(item => item.checked)
    for (let i = 0; i < checkedFilters.length; i++) {
      if (checkedFilters[i].changed) {
        continue
      }
      const field = checkedFilters[i].id
      const expected = checkedFilters[i].value || true

      filteredRooms = filteredRooms.filter(room => {
        if (Array.isArray(expected)) {
          const arr = checkedFilters[i].value
          return room[field] >= arr[0] && room[field] <= arr[1]
        } else if (typeof checkedFilters[i].value === 'number') {
          return room[field] >= expected
        } else {
          return room[field] === expected
        }
      })
      let newFiltersState = {...filters}
      const newFilter = {...newFiltersState[checkedFilters[i].id]}
      newFilter.changed = true
      newFiltersState[checkedFilters[i].id] = newFilter
      dispatch(setFilters(newFiltersState))
    }
    return filteredRooms
  }
}

export function resetFiltersChanged(filters) {
  return dispatch => {
    const filtersIds = Object.keys(filters)
    const newFilters = {...filters}
    for (let i = 0; i < filtersIds.length; i++) {
      const newFilter = {...newFilters[filtersIds[i]]}
      if ('changed' in newFilter) newFilter.changed = false
      newFilters[filtersIds[i]] = newFilter
    }
    dispatch(setFilters(newFilters))
    return newFilters
  }
}

export function onToggleCheckboxFilter(filters, id, rooms, roomsPerPage, currentPage) {
  return dispatch => {
    const newFilters = {...filters}
    const newFilter = {...newFilters[id]}
    newFilter.checked = !newFilter.checked
    newFilters[id] = newFilter
    dispatch(setFilters(newFilters))

    if (!newFilter.checked) {
      const resetFilters = dispatch(resetFiltersChanged(newFilters))
      dispatch(fetchRoomsByGuests(resetFilters, roomsPerPage, currentPage))
    } else {
      const filteredRooms = dispatch(filterRooms(rooms, newFilters))
      dispatch(setRooms(filteredRooms))
      dispatch(changePage(filteredRooms, roomsPerPage, 1, currentPage))
    }
  }
}

export function fetchRoomsByGuests(filters, roomsPerPage, currentPage) {
  return async dispatch => {
    dispatch(fetchStart())
    try {
      const guestsAmount = Object.values(filters).filter(item => item.field === 'guests').reduce((acc, current) => acc += current.value, 0)
      const response = await axios.get(`https://toxin-dc7e8-default-rtdb.europe-west1.firebasedatabase.app/-MhElDCARd13Qw1Ct3SS.json?orderBy="maxGuests"&startAt=${guestsAmount}&print=pretty`)
      const checkedFilters = Object.values(filters).filter(filter => filter.checked)
      dispatch(fetchSuccess())
      let rooms
      const arrOfValues = Object.values(response.data)
      if (!checkedFilters.length) {
        rooms = arrOfValues
      } else {
        rooms = dispatch(filterRooms(arrOfValues, filters))
      }
      dispatch(setRooms(rooms))
      dispatch(changePage(rooms, roomsPerPage, 1, currentPage))
    } catch (e) {
      dispatch(fetchError(e))
      console.log(e)
    }
  }
}

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    payload: rooms
  }
}

export function sliceCurrentRooms(rooms, roomsPerPage, currentPage) {
  return dispatch => {
    let currentRooms = rooms
      .slice((roomsPerPage * (currentPage - 1)), (roomsPerPage * (currentPage - 1) + roomsPerPage))
    dispatch(setCurrentRooms(currentRooms))
  }
}

export function setCurrentRooms(rooms) {
  return {
    type: SET_CURRENT_ROOMS,
    payload: rooms
  }
}

export function clearDates() {
  return {
    type: CLEAR_DATES
  }
}

export function closeDataPicker(newDropdownsState) {
  return dispatch => {
    const newState = {...newDropdownsState}
    newState['dataPicker'] = false
    dispatch(setDropdownsState(newState))
  }
}

export function setArrivalDate(date) {
  return {
    type: SET_ARRIVAL_DATE,
    payload: date
  }
}

export function setDepartureDate(date) {
  return {
    type: SET_DEPARTURE_DATE,
    payload: date
  }
}

export function sort(e, rooms, currentPage, roomsPerPage) {
  return dispatch => {
    const newRooms = [...rooms].sort((a, b) => {
      switch (e.target.value) {
        case 'byNumber':
          return a.number - b.number
        case 'byPriceAscending':
          return a.price - b.price
        case 'byPriceDescending':
          return b.price - a.price
        case 'byRating':
          return b.rate - a.rate
        case 'byReviews':
          return b.reviews.length - a.reviews.length
        default:
          return a.number - b.number
      }
    })
    dispatch(setSortBy(e.target.value))
    dispatch(setRooms(newRooms))
    dispatch(changePage(newRooms, roomsPerPage, 1, currentPage))
  }
}

export function setSortBy(filter) {
  return {
    type: SET_SORT_BY,
    payload: filter
  }
}

export function setRoomsPerPage(number) {
  return {
    type: SET_ROOMS_PER_PAGE,
    payload: +number
  }
}

export function outputBy(e, rooms, currentPage) {
  return dispatch => {
    dispatch(setRoomsPerPage(e.target.value))
    dispatch(changePage(rooms, e.target.value, 1, currentPage))
  }
}

export function setCurrentRoom(room) {
  return {
    type: SET_CURRENT_ROOM,
    payload: room
  }
}

export function fetchCurrentRoom(id) {
  return async dispatch => {
    const index = id.match(/\d/ig).join('') - 1
    dispatch(fetchStart())
    try {
      const response = await axios.get(`https://toxin-dc7e8-default-rtdb.europe-west1.firebasedatabase.app/-MhElDCARd13Qw1Ct3SS/${index}.json`)
      dispatch(fetchSuccess())
      dispatch(setCurrentRoom(response.data))
    } catch (e) {
      console.log(e)
      dispatch(fetchError(e))
    }
  }
}