const TodoReducer =  (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return action.payload.data;
      break;

  }
  return state;
}

export default TodoReducer