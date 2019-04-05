const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION_1': {
      return state;
    }
    case 'ACTION_2': {
      return state;
    }
    case 'ACTION_3': {
      return state;
    }
    case 'DATA_FETCHED': {
      return {...state, users: action.data}
    }
    default: {
      return state;
    }
  }
}

export default reducer;