import {
  CLEAR_DATES,
  SET_ARRIVAL_DATE,
  SET_DEPARTURE_DATE,
  SET_PAGE,
  SET_CURRENT_ROOM,
  FETCH_START,
  FETCH_ERROR,
  SET_FILTERS,
  SET_ADDITIONAL_SERVICES,
  SET_CURRENT_ROOMS,
  SET_DROPDOWNS,
  SET_ROOMS,
  FETCH_SUCCESS,
  SET_SORT_BY,
  SET_ROOMS_PER_PAGE
} from "../actions/actionsType"

const initialState = {
  dropdowns: {
    dataPicker: false,
    guests: false,
    comfort: false,
    additional: false,
    roomsPerPage: false,
    sortBy: false
  },
  startDate: null,
  endDate: null,
  additionalServices: [
    {
      id: 'breakfast',
      field: 'additional',
      label: 'Завтрак',
      price: 250,
      checked: false
    },
    {
      id: 'desk',
      field: 'additional',
      label: 'Письменный стол',
      price: 200,
      checked: false
    },
    {
      id: 'feedingChair',
      field: 'additional',
      label: 'Стул для кормления',
      price: 150,
      checked: false
    },
    {
      id: 'crib',
      field: 'additional',
      label: 'Кроватка',
      price: 300,
      checked: false
    },
    {
      id: 'tv',
      field: 'additional',
      label: 'Телевизор',
      price: 100,
      checked: false
    },
    {
      id: 'shampoo',
      field: 'additional',
      label: 'Шампунь',
      price: 50,
      checked: false
    }
  ],
  rooms: [],
  filters: {
    'adults': {
      id: 'adults',
      field: 'guests',
      label: 'Взрослые',
      value: 0
    },
    'children': {
      id: 'children',
      field: 'guests',
      label: 'Дети',
      value: 0
    },
    'babies': {
      id: 'babies',
      field: 'guests',
      label: 'Младенцы',
      value: 0
    },
    'maxGuests': {
      value: 0,
      id: 'maxGuests',
      checked: false,
      changed: false
    },
    'bedrooms': {
      id: 'bedrooms',
      field: 'comfortable',
      label: 'спальни',
      value: 0,
      checked: false,
      changed: false
    },
    'beds': {
      id: 'beds',
      field: 'comfortable',
      label: 'кровати',
      value: 0,
      checked: false,
      changed: false
    },
    'bathrooms': {
      id: 'bathrooms',
      field: 'comfortable',
      label: 'ванные комнаты',
      value: 0,
      checked: false,
      changed: false
    },
    'price': {
      id: 'price',
      value: [0, 10000],
      changed: false,
      checked: false,
      isRequest: false
    },
    'canSmoke': {
      id: 'canSmoke',
      field: 'rules',
      label: 'Можно курить',
      checked: false,
      changed: false
    },
    'petsAllowed': {
      id: 'petsAllowed',
      field: 'rules',
      label: 'Можно с питомцами',
      checked: false,
      changed: false
    },
    'canInviteGuests': {
      id: 'canInviteGuests',
      field: 'rules',
      label: 'Можно пригласить гостей (до 10 человек)',
      checked: false,
      changed: false
    },
    'hallWidth': {
      id: 'hallWidth',
      field: 'available',
      label: 'Широкий коридор',
      description: 'Ширина коридоров в номере не менее 91 см.',
      checked: false,
      changed: false,
      value: 91
    },
    'helperForTheDisabled': {
      id: 'helperForTheDisabled',
      field: 'available',
      label: 'Помощник для инвалидов',
      description: 'На 1 этаже вас встретит специалист  и проводит до номера.',
      checked: false,
      changed: false
    }
  },
  currentRooms: {},
  currentRoom: {},
  currentPage: 1,
  loading: false,
  fetchError: null,
  roomsPerPage: 12,
  sortBy: 'byNumber'
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ROOMS:
      return {
        ...state, currentRooms: action.payload
      }
    case SET_ROOMS_PER_PAGE:
      return {
        ...state, roomsPerPage: action.payload
      }
    case SET_SORT_BY:
      return {
        ...state, sortBy: action.payload
      }
    case SET_ADDITIONAL_SERVICES:
      return {
        ...state, additionalServices: action.payload
      }
    case SET_CURRENT_ROOM:
      return {
        ...state, currentRoom: action.payload
      }
    case SET_PAGE:
      return {
        ...state, currentPage: action.payload
      }
    case SET_DROPDOWNS:
      return {
        ...state, dropdowns: action.payload
      }
    case SET_FILTERS:
      return {
        ...state, filters: action.payload
      }
    case FETCH_START:
      return {
        ...state, loading: true, fetchError: null
      }
    case FETCH_ERROR:
      return {
        ...state, fetchError: action.payload, loading: false
      }
    case FETCH_SUCCESS:
      return {
        ...state, loading: false
      }
    case SET_ROOMS:
      return {
        ...state, rooms: action.payload
      }
    case CLEAR_DATES:
      return {
        ...state, startDate: null, endDate: null
      }
    case SET_ARRIVAL_DATE:
      return {
        ...state, startDate: action.payload
      }
    case SET_DEPARTURE_DATE:
      return {
        ...state, endDate: action.payload
      }
    default:
      return state
  }
}