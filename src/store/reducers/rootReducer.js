import {combineReducers} from "redux"
import searchReducer from "./searchReducer"
import registrationReducer from "./registrationReducer"


export default combineReducers({
  search: searchReducer,
  registration: registrationReducer
})