const TodoReducer =  (state = [], action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return {question_details: action.payload.data};
      break;

    case 'GET_REASONING_QUESTION':
      return {question_details: action.payload.data};
      break;

    case 'GET_ENGLISH_QUESTION':
      return {question_details: action.payload.data};
      break;

    case 'UPDATE_RESPONSE':
      const question = state.question_details[action.id];
      question['status'] = action.response == undefined ? "Pending": "Done";
      question['response'] = action.response;
      state[action.id] = Object.assign({}, state[action.id], question)
      return  state;
      break;

    case 'CREATE_USER':
      localStorage.setItem('user_id', action.payload.data.id)
      return action.payload.data;
      break;

    case 'SUBMIT_RESPONSE':
      return action.payload.data;
      break;

    case 'GET_RESULT':
      return action.payload.data;
      break;

    case 'VIEW_DETAILS':
      return action.payload.data;
      break;

  }
  return state;
}

export default TodoReducer