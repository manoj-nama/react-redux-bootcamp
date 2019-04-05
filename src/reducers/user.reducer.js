import {
  FETCH_USER_FAILED,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
} from '../actions/actionTypes'
const initialState = {
  loading: false,
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_STARTED: {
      return { ...state, loading: true }
    }
    case FETCH_USER_FAILED: {
      return { ...state, err: action.err, loading: false }
    }
    case FETCH_USER_SUCCESS: {
      return { ...state, loading: false, list: action.users };
    }
    case 'ADD_USER': {
      const list = [...state.list, action.data];
      return { ...state, list }
    }
    default: {
      return state;
    }
  }
}

export default reducer;