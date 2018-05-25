import {LOGIN, LOGOUT} from "../constants/ActionTypes"

const initialState = {
  login: false,
  userInfo: {

  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
      break;
    case LOGOUT:
      return state
      break;
    default:
      return state
  }
}
