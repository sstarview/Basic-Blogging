import { ADD_USER } from './constants';

const initialState = {
  users: [],
};

function signupReducer(state = initialState, action) {
  //   console.log('reducers', state.users);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
      break;

    default:
      return state;
  }
}

export default signupReducer;
