import * as types from '../actions/actionsTypes'

const initialState = {
  movies: [],
  movie: {},
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.MOVIES_RECEIVED: {
      return { ...state, movies: payload }
    }
    default:
      return state
  }
}