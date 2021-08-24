import {SET_RADIO, SET_TEXT_INPUTS, SET_TOGGLE} from '../actions/actionsType'

const initialState = {
  radios: [
    {
      id: 1,
      label: 'Мужчина',
      checked: false
    },
    {
      id: 2,
      label: 'Женщина',
      checked: false
    }
  ],
  textInputs: {
    email: {
      id: 'email',
      placeholder: 'Email',
      value: '',
      field: 'loginData'
    },
    password: {
      id: 'password',
      placeholder: 'Пароль',
      value: '',
      field: 'loginData'
    },
    dateOfBirth: {
      id: 'dateOfBirth',
      placeholder: 'ДД.ММ.ГГГГ',
      value: '',
      field: 'dateOfBirth'
    },
    name: {
      id: 'name',
      placeholder: 'Имя',
      field: 'fullName',
      value: '',
    },
    surname: {
      id: 'surname',
      placeholder: 'Фамилия',
      field: 'fullName',
      value: '',
    }
  },
  specialOffers: {
    id: 1,
    label: 'Получать спецпредложения',
    checked: false
  }
}

export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_INPUTS:
      return {
        ...state, textInputs: action.payload
      }
    case SET_TOGGLE:
      return {
        ...state, specialOffers: action.payload
      }
    case SET_RADIO:
      return {
        ...state, radios: action.payload
      }
    default:
      return state
  }
}