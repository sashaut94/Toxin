import {SET_RADIO, SET_TEXT_INPUTS, SET_TOGGLE} from "./actionsType";

export function setToggle(newState) {
  return {
    type: SET_TOGGLE,
    payload: newState
  }
}

export function changeToggle(state) {
  return dispatch => {
    const newState = {...state}
    newState.checked = !newState.checked
    dispatch(setToggle(newState))
  }
}

export function setRadio(newState) {
  return {
    type: SET_RADIO,
    payload: newState
  }
}

export function toggleRadio(state, id) {
  return dispatch => {
    const newState = [...state]
    const current = newState.find(radio => radio.id === id)
    const index = newState.indexOf(current)
    current.checked = !current.checked
    newState[index] = current
    dispatch(setRadio(newState))
  }
}


export function setTextInputs(newState) {
  return {
    type: SET_TEXT_INPUTS,
    payload: newState
  }
}

export function changeInput(e, state, id) {
  return dispatch => {
    const newState = {...state}
    const current = {...newState[id]}
    current.value = e.target.value
    newState[id] = current
    dispatch(setTextInputs(newState))
  }
}
