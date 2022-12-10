import {authorizationType} from "./type";

const initialState = {
  token: ''
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorizationType.SET_TOKEN_DATA: {
      return {...state, token: action.payload}
    }
    case authorizationType.CHECK_TOKEN: {
      const newToken = localStorage.getItem('token_test')
      if (newToken) {
        return {...state, token: newToken}
      } else {
        return {...state, token: ''}
      }

    }
    default: {
      return {...state}
    }
  }
}

export default authReducer