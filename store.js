import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  data: {},
}

export const actionTypes = {
  SET_DATA: 'SET_DATA',
}

// REDUCERS
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: payload,
      }
    default:
      return state
  }
}

// ACTIONS
export const setData = (payload) => {
  return {
    type: actionTypes.SET_DATA,
    payload,
  }
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
